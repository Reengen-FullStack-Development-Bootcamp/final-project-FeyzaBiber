# factory-backendAPI [link](https://factory-backend-api.vercel.app/)
 

# Docs

## /user

- POST /user/signin  
- POST /user/signup  
- POST /user/me   

body json:
username: string
email: string
password: string (min. 6 length)
role: ['admin', 'editor']


## /fabrika_adi

- GET /fabrika_adi
- POST /fabrika_adi
- DELETE /fabrika_adi

header:
token : string

body: (json encoded)

kullanan_birim
tarih_araligi
kullanim_kw
kullanim_bedeli
indirimli_fiyat


## /fabrika_listesi

- GET /fabrika_listesi
- POST /fabrika_listesi
- DELETE /fabrika_listesi

header:
token : string

body: (json encoded)

firma_adi
uyelik_tarihi
uyelik_bitis_tarihi
calisan_sayisi
special_uye

## Technologies Used:

- MongoDB
- Postgre SQL in Heroku
- pg
- Mongoose
- jwt
- Express.js
- Node.js 
- jsonwebtoken
- bcyrptjs 
