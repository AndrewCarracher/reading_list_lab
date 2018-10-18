document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener( 'submit', handleFormSubmit);

})


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const result = document.querySelector('#results_display');
    let newText = document.createElement("p");
    result.appendChild(newText);
    newText.textContent = `Title: ${this.title.value}, Author: ${this.author.value}, Book: ${this.category.value}`;


    // console.log(newText);

    document.getElementById('new-item-form').reset();
  }
