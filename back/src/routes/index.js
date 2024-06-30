const {Router} = require('express')
// SDK de Mercado Pago
const { MercadoPagoConfig,Preference } = require('mercadopago');
const router = Router()

// let pushSubscription

// router.post('/subscription', async (req,res)=>{
//   pushSubscription = req.body
//   console.log(req.body);
//   res.status(200).json()

//   const payload = JSON.stringify({
//     title:'Gracias por permitir las notificaciones!🥳',
//     message:'disfruta de Fútbol PWA ⚽'
//   })
  
//   try {
//     await webpush.sendNotification(pushSubscription,payload)
//     console.log("Notificacion enviada!");
//   } catch (error) {
//     console.log("error al hacer el send notification",error);
//   }
// })
const ACCESS_TOKEN = process.env.ACCESS_TOKEN
// 'TEST-5691609799867371-062316-43b4fdc7fc1adf6bfafd657758a7ad6d-144774982'
const PUBLIC_KEY = process.env.PUBLIC_KEY
// 'TEST-af83b07b-9802-49f9-84bc-0ef8a80ff4d1'
router.get('/api/log', (req, res) => {
  console.log("¡Ruta GET /log accedida!");
  res.status(200).json({ message: "Mensaje registrado en la consola" });
});




router.post('/api/create_preference', async (req,res)=>{
  try {
    // Agrega credenciales
    const client = new MercadoPagoConfig({ accessToken: ACCESS_TOKEN });
const preference = new Preference(client);
const { cart } = JSON.parse(Object.keys(req.body)[0]);;
    const body = {
      items: 
      cart.map(item => ({
        title: item.title,
        quantity:Number(item.quantity),
        unit_price:Number(item.price),
        currency_id: "ARS",
      })),
      // [
      //   {
      //     title: req.body.title,
      //     quantity: Number(req.body.quantity),
      //     unit_price: Number(req.body.price),
      //     currency_id: "ARS",
      //   }
      // ],
      back_urls: {
        success: "https://www.youtube.com/watch?v=-VD-l5BQsuE",
        failure: "https://www.youtube.com/watch?v=-VD-l5BQsuE",
        pending: "https://www.youtube.com/watch?v=-VD-l5BQsuE"
      },
      auto_return: "approved",
    };
    const result = await preference.create({ body }).catch(e=>console.log(e));
    res.json({ id: result.id })
  } catch (error) {
    res.status(500).json({error: 'error al crear la preferencia'})
    console.log("error al hacer el send notification",error);
  }
})



module.exports = router;

// npx web-push generate-vapid-keys
// para refrescar memoria del navegador es ctrl + shift + r