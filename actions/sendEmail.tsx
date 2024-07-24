"use server"

export const sendEmail = async(formData:FormData)=>{
    console.log("running on  server")
    console.log(formData.get('Email Address'))
    console.log(formData.get('Message'))
}
