

/** image onto base64 */

export default function convertToBase64(file){

    return new Promise((resolve, reject) => {

        const fileReader = new FileReader(); //creating a object for reading the file while uploading

        console.log(fileReader)

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {

            resolve(fileReader.result)

        }

        fileReader.onerror = (error) => {

            reject(error)

        }
    })
}