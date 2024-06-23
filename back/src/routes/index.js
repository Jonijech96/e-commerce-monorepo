const {Router} = require('express')
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

router.get('/api/log', (req, res) => {
  console.log("¡Ruta GET /log accedida!");
  res.status(200).json({ message: "Mensaje registrado en la consola" });
});

module.exports = router;

// npx web-push generate-vapid-keys
// para refrescar memoria del navegador es ctrl + shift + r