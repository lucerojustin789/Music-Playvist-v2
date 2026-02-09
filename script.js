form.addEventListener("submit",function(e){
  e.preventDefault();
  let title = titleInput.value;
  let publisher = devInput.value;
  let releaseDate = releaseDateInput.value;
  let gifSrc = gifInput.value;
  let imgSrc = imgInput.value;
  let newObj = {
      "id":getNextId(),
      "title": title,
      "publisher":publisher,
      "releaseDate":releaseDate,
      "imgSrc":imgSrc,
      "gifSrc":gifSrc };
  submitData(newObj);
  form.reset();
});
