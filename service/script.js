function openForm(){ 
    document.getElementById('popupForm').style.display='flex'; 
}
function closeForm(){ 
    document.getElementById('popupForm').style.display='none'; 
}

// Закрытие формы при клике вне
window.onclick = function(event){
  if(event.target == document.getElementById('popupForm')) closeForm();
}

// Валидация и отправка формы (пример)
document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    closeForm();
    this.reset();
});
