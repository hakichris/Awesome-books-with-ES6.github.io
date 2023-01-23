const display = () => {
  const sectionList = document.getElementById('displaybook');
  const sectionForm = document.getElementById('form');
  const sectionContact = document.getElementById('contact');
  const stayword = document.querySelector('.stay');

  const List = document.getElementById('navList');
  List.addEventListener('click', () => {
    sectionList.style.display = 'block';
    sectionForm.style.display = 'none';
    sectionContact.style.display = 'none';
    stayword.style.display = 'none';
  });

  const Form = document.getElementById('navNew');
  Form.addEventListener('click', () => {
    sectionList.style.display = 'none';
    sectionForm.style.display = 'block';
    sectionContact.style.display = 'none';
    stayword.style.display = 'none';
  });

  const Contact = document.getElementById('navContact');
  Contact.addEventListener('click', () => {
    sectionList.style.display = 'none';
    sectionForm.style.display = 'none';
    sectionContact.style.display = 'block';
    stayword.style.display = 'none';
  });
};

export default display;
