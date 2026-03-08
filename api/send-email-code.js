import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Разрешаем запросы с твоего сайта
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { email, code } = req.body;
    
    if (!email || !code) {
        return res.status(400).json({ error: 'Email and code are required' });
    }
    
    // Настройка SMTP для Яндекса (твои данные)
    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'appar.raprar@yandex.ru',  // Твоя почта
            pass: 'ocuuympxnjxsqhhv'          // Твой пароль приложения
        }
    });
    
    try {
        // Отправляем письмо с красивым HTML
        await transporter.sendMail({
            from: '"Preep Docs" <appar.raprar@yandex.ru>',
            to: email,
            subject: '🔐 Код для входа на Preep Docs',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <style>
                        body { 
                            font-family: 'Segoe UI', Arial, sans-serif; 
                            line-height: 1.6; 
                            color: #333; 
                            max-width: 600px; 
                            margin: 0 auto; 
                            background: #f5f5f5;
                            padding: 20px;
                        }
                        .container { 
                            border: 1px solid #e0e0e0; 
                            border-radius: 16px; 
                            padding: 30px; 
                            background: white; 
                            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                        }
                        h1 { 
                            color: #2563eb; 
                            font-size: 24px; 
                            margin-bottom: 20px;
                            border-bottom: 2px solid #2563eb;
                            padding-bottom: 10px;
                        }
                        .code { 
                            font-size: 48px; 
                            font-weight: bold; 
                            color: #2563eb; 
                            background: #f0f4ff; 
                            padding: 25px; 
                            text-align: center; 
                            border-radius: 12px; 
                            letter-spacing: 8px; 
                            margin: 25px 0; 
                            border: 2px solid #2563eb;
                            font-family: monospace;
                        }
                        .footer { 
                            margin-top: 30px; 
                            font-size: 12px; 
                            color: #666; 
                            text-align: center; 
                            border-top: 1px solid #ddd; 
                            padding-top: 20px; 
                        }
                        .logo {
                            text-align: center;
                            margin-bottom: 20px;
                        }
                        .logo h2 {
                            color: #2563eb;
                            margin: 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="logo">
                            <h2>📋 Preep Docs</h2>
                        </div>
                        <h1>🔐 Код подтверждения</h1>
                        <p>Здравствуйте!</p>
                        <p>Для входа на сайт <strong>Preep Docs</strong> используйте следующий код:</p>
                        
                        <div class="code">${code}</div>
                        
                        <p>⏰ Код действителен в течение <strong>10 минут</strong>.</p>
                        <p>Если вы не запрашивали код, просто проигнорируйте это письмо.</p>
                        
                        <div class="footer">
                            <p>© 2024-2026 Preep Docs. Готовые документы и нейросеть.</p>
                            <p>Это автоматическое письмо, отвечать на него не нужно.</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        });
        
        console.log(`✅ Код отправлен на ${email}`);
        res.status(200).json({ success: true });
        
    } catch (error) {
        console.error('❌ Ошибка отправки email:', error);
        res.status(500).json({ 
            error: 'Failed to send email',
            details: error.message 
        });
    }
}
