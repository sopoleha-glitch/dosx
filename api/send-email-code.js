import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // Разрешаем запросы с твоего сайта
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // Подробное логирование
    console.log('📧 ===== ФУНКЦИЯ ВЫЗВАНА =====');
    console.log('Метод:', req.method);
    console.log('Время:', new Date().toISOString());
    
    if (req.method !== 'POST') {
        console.log('❌ Неверный метод:', req.method);
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { email, code } = req.body;
    console.log('Получен email:', email);
    console.log('Получен код:', code);
    
    if (!email || !code) {
        console.log('❌ Нет email или code');
        return res.status(400).json({ error: 'Email and code are required' });
    }
    
    // Берем данные из Environment Variables
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    
    console.log('SMTP_USER из окружения:', user ? '✅ Найден' : '❌ НЕ НАЙДЕН');
    console.log('SMTP_PASSWORD из окружения:', pass ? '✅ Найден' : '❌ НЕ НАЙДЕН');
    
    if (!user || !pass) {
        console.error('❌ SMTP credentials not found in environment variables');
        return res.status(500).json({ error: 'Server configuration error' });
    }
    
    // Настройка SMTP для Яндекса
    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: pass
        },
        // Добавляем таймаут
        connectionTimeout: 5000,
        socketTimeout: 5000
    });
    
    try {
        console.log('📤 Отправляем письмо...');
        
        const info = await transporter.sendMail({
            from: `"Preep Docs" <${user}>`,
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
                        .header { 
                            text-align: center;
                            border-bottom: 2px solid #2563eb;
                            padding-bottom: 20px;
                            margin-bottom: 20px;
                        }
                        .header h1 { 
                            color: #2563eb; 
                            margin: 0;
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
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>📋 Preep Docs</h1>
                        </div>
                        
                        <h2 style="color: #333;">🔐 Код подтверждения</h2>
                        
                        <p style="font-size: 16px;">Здравствуйте!</p>
                        <p style="font-size: 16px;">Для входа на сайт <strong>Preep Docs</strong> используйте код:</p>
                        
                        <div class="code">${code}</div>
                        
                        <p style="font-size: 14px;">⏰ Код действителен в течение <strong>10 минут</strong>.</p>
                        <p style="font-size: 14px;">Если вы не запрашивали код, просто проигнорируйте это письмо.</p>
                        
                        <div class="footer">
                            <p>© 2024-2026 Preep Docs. Готовые документы и нейросеть.</p>
                            <p style="font-size: 11px;">Это автоматическое письмо, отвечать на него не нужно.</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        });
        
        console.log('✅ Письмо отправлено!');
        console.log('Message ID:', info.messageId);
        
        res.status(200).json({ success: true, messageId: info.messageId });
        
    } catch (error) {
        console.error('❌ Ошибка отправки:');
        console.error('Имя ошибки:', error.name);
        console.error('Сообщение:', error.message);
        console.error('Полный error:', error);
        
        res.status(500).json({ 
            error: 'Failed to send email',
            details: error.message,
            name: error.name
        });
    }
}
