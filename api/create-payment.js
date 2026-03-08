export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { amount, description, orderId, email } = req.body;
    
    // Здесь можно добавить логику создания платежа в ЮMoney
    // Пока просто возвращаем URL для редиректа
    
    const paymentUrl = `https://yoomoney.ru/quickpay/confirm.xml?` +
        `receiver=${process.env.YOOMONEY_CLIENT_ID}&` +
        `quickpay-form=shop&` +
        `paymentType=AC&` +
        `sum=${amount}&` +
        `label=${orderId}&` +
        `successURL=${req.headers.origin}/payment-success.html?email=${encodeURIComponent(email)}&` +
        `targets=${encodeURIComponent(description)}`;
    
    res.status(200).json({
        success: true,
        paymentUrl: paymentUrl
    });
}
