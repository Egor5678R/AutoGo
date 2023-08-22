const carsWrapper = document.querySelector(".carsWrapper") 
const cars = [ 
    { 
        carImage:"./img/middleImageVolksvagenPolo.svg", 
        carImageForBooking:"./img/bigImageVolksvagenPolo.svg",
        carName:"Volkswagen Polo",  
        carClass:"Эконом класс", 
        carPrice:"От 1300₽ / сутки" 
         
    }, 
    { 
        carImage:"./img/middleImageKiaRio.svg", 
        carImageForBooking:"./img/bigImageKiaRio.svg",
        carName:"Kia Rio",  
        carClass:"Эконом класс", 
        carPrice:"От 1400₽ / сутки" 
    }, 
    { 
        carImage:"./img/middleImageHyundaiSolaris.svg", 
        carImageForBooking:"./img/bigImageHyundaiSolaris.svg",
        carName:"Hyundai Solaris",  
        carClass:"Эконом класс", 
        carPrice:"От 1300₽ / сутки" 
    }, 
    { 
        carImage:"./img/middleImageVolksvagenArteon.svg", 
        carImageForBooking:"./img/bigImageVolksvagenArteon.svg",
        carName:"Volkswagen Arteon",  
        carClass:"Бизнес класс", 
        carPrice:"От 1800₽ / сутки" 
    }, 
    { 
        carImage:"./img/middleImageBMW_M3.svg", 
        carImageForBooking:"./img/bigImageBMW_M3.svg",
        carName:"BMW M3",  
        carClass:"Бизнес класс", 
        carPrice:"От 4000₽ / сутки" 
    }, 
    { 
        carImage:"./img/middleImageMercedes_C63_S.svg", 
        carImageForBooking:"./img/bigImageMercedes_C63_S.svg",
        carName:"Mercedes C63 S",  
        carClass:"Бизнес класс", 
        carPrice:"От 4500₽ / сутки" 
    } 
] 
 

 
cars.forEach (product => { 
    const backgroundCars = document.createElement("div") 
    const carImage = document.createElement("img")
    const title = document.createElement("h3") 
    const carClass = document.createElement("h4") 
    const carPrice = document.createElement("h5") 
    const reserveButton = document.createElement("button") 
 
    backgroundCars.classList.add("carsBackground") 
    carImage.classList.add("imagesForOurOffers") 
    title.classList.add("textModelOfCar") 
    carClass.classList.add("classCar") 
    reserveButton.classList.add("buttonForCars") 
    carPrice.classList.add("priceCar") 
 
    backgroundCars.appendChild(carImage) 
    backgroundCars.appendChild(title) 
    backgroundCars.appendChild(carClass) 
    backgroundCars.appendChild(carPrice) 
    backgroundCars.appendChild(reserveButton) 
 
    carImage.src = product.carImage 
    title.textContent = product.carName 
    carClass.textContent = product.carClass 
    carPrice.textContent = product.carPrice 
    reserveButton.textContent = "Забронировать" 
 
    carsWrapper.appendChild(backgroundCars)
    reserveButton.addEventListener("click", () =>{
        showPopUp(product)
    }) 
})

function showPopUp(product) { 
  const elements = document.querySelector("*") 
  const popUp = document.createElement("div")
  popUp.classList.add("popUp")
  carsWrapper.appendChild(popUp)
  const car = document.createElement("div")
  const popUpImage = document.createElement("img")
  popUpImage.src = product.carImageForBooking; 
  const overlay = document.createElement("div")
  const title = document.createElement("h3") 
  const carClass = document.createElement("h4") 
  const closeButton = document.createElement("button") 
  const overTheForm = document.createElement("div")
  const form = document.createElement("form")
  const bookingCar = document.createElement("h3")
  const filling = document.createElement("h4") 
  const info = document.createElement("h5") 
  const inputsForForm = document.createElement("div")
  const label1 = document.createElement("label")
  const label2 = document.createElement("label")
  const select = document.createElement("select")
  const input1 = document.createElement("input")
  const label3 = document.createElement("label")
  const label4 = document.createElement("label") 
  const input2 = document.createElement("input")
  const input3 = document.createElement("input") 
  const buttonForBooking = document.createElement("button") 
  input1.type = "number" 
  input2.type = "text" 
  input3.type = "tel" 
  input1.placeholder = "Количество дней аренды"; 
  input2.placeholder = "ФИО*" 
  input3.placeholder = "Телефон*" 
  input2.required 
  input3.required 
  buttonForBooking.classList.add("buttonForBooking") 
  info.classList.add("info") 
  overTheForm.classList.add("overTheForm")
  label2.classList.add("addressIssue")
  popUpImage.classList.add("imageForBooking")
  closeButton.classList.add("closeButton") 
  overlay.classList.add("overlay")
  car.classList.add("car")
  title.classList.add("carModel")
  carClass.classList.add("classType")
  bookingCar.classList.add("bookingCar")
  filling.classList.add("filling")
  inputsForForm.classList.add("inputsForForm")
  input1.classList.add("input")
  input2.classList.add("input")
  input2.classList.add("required") 
  input3.classList.add("input")
  input3.classList.add("required") 
  label1.classList.add("label")
  label2.classList.add("addressIssue") 
  label3.classList.add("label")
  label4.classList.add("label")
  
  buttonForBooking.textContent = "Забронировать" 
  closeButton.textContent = "×"
  info.textContent = "Остальную информацию вы сможете получить от наших менеджеров при встрече в офисе" 
  bookingCar.textContent = "Бронирование автомобиля"
  filling.textContent = 
    "Заполните первичную информацию и мы свяжемся с вами для уточнения деталей"
  title.textContent = product.carName
  carClass.textContent = product.carClass
  label2.textContent = "Выберите адрес пункта выдачи"
  overTheForm.appendChild(popUpImage) 
  overTheForm.appendChild(car)
  car.appendChild(title) 
  car.appendChild(carClass) 
  form.appendChild(bookingCar)
  form.appendChild(filling)
  inputsForForm.appendChild(label1) 
  inputsForForm.appendChild(input1) 
  inputsForForm.appendChild(label3)
  inputsForForm.appendChild(input2)
  
  inputsForForm.appendChild(label2)
  inputsForForm.appendChild(select)
  label4.style.marginLeft = "10pxW"
  inputsForForm.appendChild(label4)
  inputsForForm.appendChild(input3)
   
  form.appendChild(inputsForForm)
  overlay.style.display = "block" 
  popUp.appendChild(closeButton)
  document.body.appendChild(overlay)
  overlay.style.opacity = "1" 
  popUp.appendChild(overTheForm)
  popUp.appendChild(form) 
  popUp.appendChild(info)
  popUp.appendChild(buttonForBooking)
  setTimeout(() => { 
    popUp.classList.add("show")
  }, 10)

  input1.addEventListener("input", () => {
    validateInputFields();
  })

  input2.addEventListener("input", () => {
    validateInputFields();
  })

  input3.addEventListener("input", () => {
    validateInputFields()
  })
function validateInputFields() {
    if (input1.value !== "" && input2.value !== "" && input3.value !== "") {
      
      buttonForBooking.style.border =  "1px solid #33B5FF"
      buttonForBooking.style.background= "#A1DDFF"
  
      buttonForBooking.disabled = false;
    } else {
      buttonForBooking.disabled = true;
      buttonForBooking.style.border =  "1px solid #626262"
      buttonForBooking.style.background= "#B6B6B6"
    }
  }
  
 
  closeButton.addEventListener('click', function() {
    popUp.classList.add('hide')
    overlay.style.transition = "0.5s"
    overlay.style.opacity = "0"
  
    setTimeout(function() {
      popUp.remove();
    }, 300); 
  });

  buttonForBooking.addEventListener("click", validateInputs)
  
  function validateInputs() {
    var fio = input2.value.trim().split(" ")
    var phoneNumber = input3.value
  
    if (fio.length !== 3 || fio.some(function(name) {
      return !/^[А-ЯЁ][а-яё]+$/.test(name);
    })) {
      input2.style.borderColor = "red"; 
      buttonForBooking.style.border =  "1px solid #626262"
      buttonForBooking.style.background= "#B6B6B6"
    } else {
      input2.style.borderColor = "green"
    }
  
    if (phoneNumber === "") {
      input3.style.borderColor = "red"
    } else {
      var validFormat = /^(\+7|8)\d{10}$/
      if (!validFormat.test(phoneNumber)) {
        input3.style.borderColor = "red"
        buttonForBooking.style.border =  "1px solid #626262"
        buttonForBooking.style.background= "#B6B6B6"
      } else {
        input3.style.borderColor = "green"
      }
    }
  
    if (input2.style.borderColor === "green" && input3.style.borderColor === "green") {
      setTimeout(() => {
        popUp.classList.remove("show")
        overlay.style.transition = "0.5s"
        overlay.style.opacity = "0"
        showNotification(product)
      }, 0)
      
    }
    }
  }
  


  function showNotification(product){
    const notification = document.createElement("div")
    const text1 = document.createElement("h2")
    const text2 = document.createElement("h3")

    text1.textContent = "Автомобиль " + product.carName + " забронирован"
    text2.textContent = "Ожидайте звонка менеджера"

    notification.classList.add("notificationBackground")
    text1.classList.add("notificationText1")
    text2.classList.add("notificationText2")

    document.body.appendChild(notification)
    notification.appendChild(text1)
    notification.appendChild(text2)

      
      setTimeout(function() {
        notification.style.opacity = "1"
      }, 300); 
      
      
      setTimeout(() =>{
        notification.style.opacity = "0"
      }, 10000)
    }


  