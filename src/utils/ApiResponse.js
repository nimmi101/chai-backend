class ApiResponse {
    constructor(statusCode, message, data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode <400  //kyuki api response hai or  400 se upr api error hoga, to success true hoga aur agar status code 400 se upr hoga to success false hoga, jisse frontend me pata chale ki api call successful rahi ya nahi
    }
}    

export { ApiResponse }