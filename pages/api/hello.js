import { checkEmail, saveData } from "./services/helperfunc";


export default function handler(req, res) {


  const { email, password } = req.body
  if (req.method === "POST") {

    const isEmail = checkEmail(email)
    if (isEmail === undefined) {

      saveData(email, password)
      res.status(200).send()
    }
    else {
      res.status(401).json({error:"user already exit"})
     
    }
  }

}

// res.status(200).json(data)