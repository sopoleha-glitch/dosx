export default async function handler(req, res) {
    // Разрешаем запросы с любого источника (для GitHub Pages)
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { prompt, type, style } = req.body;
    
    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }
    
    const apiKey = process.env.DEEPSEEK_API_KEY;
    
    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }
    
    try {
        const systemPrompt = style === 'simple' 
            ? 'Ты профессиональный юрист. Составь документ простым и понятным языком, но с сохранением юридической силы.'
            : 'Ты профессиональный юрист. Составь официальный юридический документ со всеми необходимыми реквизитами.';
        
        const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'deepseek-chat',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7,
                max_tokens: 4000
            })
        });
        
        const data = await response.json();
        
        if (data.choices && data.choices[0]) {
            res.status(200).json({
                success: true,
                document: data.choices[0].message.content
            });
        } else {
            throw new Error('Invalid response from DeepSeek');
        }
        
    } catch (error) {
        console.error('AI Generation Error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to generate document' 
        });
    }
}
