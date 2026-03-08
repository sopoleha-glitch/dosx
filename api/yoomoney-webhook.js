export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    // Получаем данные от ЮMoney
    const {
        label,        // номер заказа
        amount,       // сумма
        email,        // email плательщика
        operation_id, // номер операции
        sha1_hash     // подпись
    } = req.body;
    
    // Проверяем подпись (для безопасности)
    const secret = process.env.YOOMONEY_SECRET || process.env.YOOMONEY_CLIENT_SECRET;
    const hash = require('crypto')
        .createHash('sha1')
        .update(`${label}${amount}${secret}`)
        .digest('hex');
    
    if (hash !== sha1_hash) {
        return res.status(400).send('Bad signature');
    }
    
    // Определяем тип заказа (документы или тариф)
    if (label.startsWith('tariff_')) {
        // Оплата тарифа
        const tariffOrders = JSON.parse(process.env.TARIFF_ORDERS || '{}');
        const order = tariffOrders[label];
        
        if (order) {
            // Активируем тариф для пользователя
            order.status = 'paid';
            // Здесь логика активации тарифа
        }
    } else {
        // Оплата документов
        const orders = JSON.parse(process.env.ORDERS || '{}');
        const order = orders[label];
        
        if (order) {
            order.status = 'paid';
            // Здесь отправка документов на почту
        }
    }
    
    res.status(200).send('OK');
}
