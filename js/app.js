document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener( 'submit', handleFormSubmit);

  const button = document.querySelector('#button');
  button.addEventListener("click", handleButtonClick);

})


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const result = document.querySelector('#results_display');
    let newText = document.createElement("p");
    result.appendChild(newText);
    newText.textContent = `Title: ${this.title.value}, Author: ${this.author.value}, Book: ${this.category.value}`;
    document.getElementById('new-item-form').reset();
  }

  const handleButtonClick = () => {
    const clearResults = document.querySelector('#results_display');
    clearResults.textContent = "";
  }
