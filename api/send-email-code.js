import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { email, code } = req.body;
    
    if (!email || !code) {
        return res.status(400).json({ error: 'Email and code are required' });
    }
    
    // Берем данные из Environment Variables (которые ты только что добавил)
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    
    console.log('SMTP User:', user); // Для проверки в логах
    
    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: pass
        }
    });
    
    try {
        await transporter.sendMail({
            from: `"Preep Docs" <${user}>`,
            to: email,
            subject: '🔐 Код для входа на Preep Docs',
            html: `
                <h2>Ваш код подтверждения</h2>
                <h1 style="font-size: 48px; color: #2563eb;">${code}</h1>
                <p>Код действителен 10 минут.</p>
            `
        });
        
        console.log(`✅ Код отправлен на ${email}`);
        res.status(200).json({ success: true });
        
    } catch (error) {
        console.error('❌ Ошибка:', error);
        res.status(500).json({ 
            error: 'Failed to send email',
            details: error.message 
        });
    }
}
