export function imageToBS64(image, callback){
    //reader - это объект JavaScript, который работает с файлами
    const reader = new FileReader();
    //Применяем метод onloadend объекта reader
    // Внутри этого методы мы получаем результат преобразования файла в строку
    reader.onloadend = function() {
        // Передаем результат конвертации изображения в строку в колбэк функцию
        callback(reader.result)
    }
    //Читаем файл и преобразуем его в строку в методе readAsDataURL
    reader.readAsDataURL(image);
}