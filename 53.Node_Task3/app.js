const express = require("express")
let app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello form Node Task 3")
})

app.post("/users",(req,res)=>{
     const {name ,email, age ,role} = req.body
    // res.send(`User created successfully name:${name} , email:${email}`,req.body)
    res.send({data:`User created successfully 
        name: ${name}
        phone: ${age}
        email : ${email}
        role : ${role}`,
        body:req.body
      }
      )
        console.log(req.body)

})

app.get("/users",(req,res)=>{
    res.send([
        {
          "id": 1,
          "name": "John Doe",
          "email": "john.doe@example.com",
          "age": 29,
          "role": "user"
        },
        {
          "id": 2,
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "age": 32,
          "role": "admin"
        },
        {
          "id": 3,
          "name": "Emily Johnson",
          "email": "emily.johnson@example.com",
          "age": 25,
          "role": "user"
        },
        {
          "id": 4,
          "name": "Michael Brown",
          "email": "michael.brown@example.com",
          "age": 41,
          "role": "moderator"
        },
        {
          "id": 5,
          "name": "Sarah Davis",
          "email": "sarah.davis@example.com",
          "age": 22,
          "role": "user"
        },
        {
          "id": 6,
          "name": "Chris Wilson",
          "email": "chris.wilson@example.com",
          "age": 36,
          "role": "user"
        },
        {
          "id": 7,
          "name": "Amanda Martinez",
          "email": "amanda.martinez@example.com",
          "age": 27,
          "role": "user"
        },
        {
          "id": 8,
          "name": "Daniel Taylor",
          "email": "daniel.taylor@example.com",
          "age": 30,
          "role": "user"
        },
        {
          "id": 9,
          "name": "Sophia Anderson",
          "email": "sophia.anderson@example.com",
          "age": 26,
          "role": "user"
        },
        {
          "id": 10,
          "name": "Ethan Thomas",
          "email": "ethan.thomas@example.com",
          "age": 35,
          "role": "moderator"
        },
        {
          "id": 11,
          "name": "Olivia White",
          "email": "olivia.white@example.com",
          "age": 28,
          "role": "admin"
        },
        {
          "id": 12,
          "name": "Liam Harris",
          "email": "liam.harris@example.com",
          "age": 33,
          "role": "user"
        },
        {
          "id": 13,
          "name": "Mia Martin",
          "email": "mia.martin@example.com",
          "age": 24,
          "role": "user"
        },
        {
          "id": 14,
          "name": "Benjamin Lee",
          "email": "benjamin.lee@example.com",
          "age": 29,
          "role": "user"
        },
        {
          "id": 15,
          "name": "Ella Clark",
          "email": "ella.clark@example.com",
          "age": 31,
          "role": "user"
        },
        {
          "id": 16,
          "name": "Aiden Walker",
          "email": "aiden.walker@example.com",
          "age": 34,
          "role": "user"
        },
        {
          "id": 17,
          "name": "Isabella Hall",
          "email": "isabella.hall@example.com",
          "age": 23,
          "role": "moderator"
        },
        {
          "id": 18,
          "name": "Noah Allen",
          "email": "noah.allen@example.com",
          "age": 27,
          "role": "user"
        },
        {
          "id": 19,
          "name": "Charlotte Young",
          "email": "charlotte.young@example.com",
          "age": 29,
          "role": "user"
        },
        {
          "id": 20,
          "name": "James King",
          "email": "james.king@example.com",
          "age": 42,
          "role": "admin"
        },
        {
          "id": 21,
          "name": "Grace Scott",
          "email": "grace.scott@example.com",
          "age": 26,
          "role": "user"
        },
        {
          "id": 22,
          "name": "Jack Adams",
          "email": "jack.adams@example.com",
          "age": 38,
          "role": "user"
        },
        {
          "id": 23,
          "name": "Zoe Baker",
          "email": "zoe.baker@example.com",
          "age": 21,
          "role": "user"
        },
        {
          "id": 24,
          "name": "Ryan Nelson",
          "email": "ryan.nelson@example.com",
          "age": 37,
          "role": "moderator"
        },
        {
          "id": 25,
          "name": "Layla Carter",
          "email": "layla.carter@example.com",
          "age": 25,
          "role": "user"
        },
        {
          "id": 26,
          "name": "Lucas Mitchell",
          "email": "lucas.mitchell@example.com",
          "age": 28,
          "role": "user"
        },
        {
          "id": 27,
          "name": "Ava Perez",
          "email": "ava.perez@example.com",
          "age": 32,
          "role": "admin"
        },
        {
          "id": 28,
          "name": "Henry Roberts",
          "email": "henry.roberts@example.com",
          "age": 39,
          "role": "user"
        },
        {
          "id": 29,
          "name": "Chloe Ramirez",
          "email": "chloe.ramirez@example.com",
          "age": 24,
          "role": "user"
        },
        {
          "id": 30,
          "name": "Alexander Hernandez",
          "email": "alexander.hernandez@example.com",
          "age": 31,
          "role": "moderator"
        },
        {
          "id": 31,
          "name": "Ella Moore",
          "email": "ella.moore@example.com",
          "age": 23,
          "role": "user"
        },
        {
          "id": 32,
          "name": "Samuel Lopez",
          "email": "samuel.lopez@example.com",
          "age": 29,
          "role": "user"
        },
        {
          "id": 33,
          "name": "Lily Green",
          "email": "lily.green@example.com",
          "age": 26,
          "role": "user"
        },
        {
          "id": 34,
          "name": "Matthew Carter",
          "email": "matthew.carter@example.com",
          "age": 34,
          "role": "admin"
        },
        {
          "id": 35,
          "name": "Hannah Perez",
          "email": "hannah.perez@example.com",
          "age": 30,
          "role": "user"
        },
        {
          "id": 36,
          "name": "Elijah Evans",
          "email": "elijah.evans@example.com",
          "age": 35,
          "role": "user"
        },
        {
          "id": 37,
          "name": "Maya Torres",
          "email": "maya.torres@example.com",
          "age": 27,
          "role": "moderator"
        },
        {
          "id": 38,
          "name": "David Peterson",
          "email": "david.peterson@example.com",
          "age": 41,
          "role": "user"
        },
        {
          "id": 39,
          "name": "Lila Foster",
          "email": "lila.foster@example.com",
          "age": 22,
          "role": "user"
        },
        {
          "id": 40,
          "name": "William Murphy",
          "email": "william.murphy@example.com",
          "age": 36,
          "role": "admin"
        },
        {
          "id": 41,
          "name": "Abigail Rivera",
          "email": "abigail.rivera@example.com",
          "age": 25,
          "role": "user"
        },
        {
          "id": 42,
          "name": "Jacob Howard",
          "email": "jacob.howard@example.com",
          "age": 30,
          "role": "user"
        },
        {
          "id": 43,
          "name": "Sofia Ward",
          "email": "sofia.ward@example.com",
          "age": 28,
          "role": "user"
        },
        {
          "id": 44,
          "name": "Logan Cox",
          "email": "logan.cox@example.com",
          "age": 33,
          "role": "moderator"
        },
        {
          "id": 45,
          "name": "Scarlett Wood",
          "email": "scarlett.wood@example.com",
          "age": 23,
          "role": "user"
        },
        {
          "id": 46,
          "name": "Nathan Bell",
          "email": "nathan.bell@example.com",
          "age": 39,
          "role": "admin"
        },
        {
          "id": 47,
          "name": "Victoria Collins",
          "email": "victoria.collins@example.com",
          "age": 32,
          "role": "user"
        },
        {
          "id": 48,
          "name": "Andrew Edwards",
          "email": "andrew.edwards@example.com",
          "age": 29,
          "role": "user"
        },
        {
          "id": 49,
          "name": "Aria Turner",
          "email": "aria.turner@example.com",
          "age": 27,
          "role": "moderator"
        },
        {
          "id": 50,
          "name": "Sebastian Russell",
          "email": "sebastian.russell@example.com",
          "age": 34,
          "role": "user"
        }
      ]
      )
  
})

app.listen(3000,()=>{
  console.log("Server stated at port 3000")
})