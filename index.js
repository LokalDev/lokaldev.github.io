const saveEmail = () => {
  const defaultSearch = document.getElementById("default-search");
  const email = !!defaultSearch ? defaultSearch.value.toLowerCase() : null;
  if (email) {
    const success = toStorage(email);
    const content = {
      message: success
        ? "Salamat sa pag subscribe sa aming newsletter. Ikaw ay makaka asa na makaka kuha ng latest and updated events mula sa FudLokal. #SupportLokal!"
        : "Something went wrong!",
    };
    console.log(content.message);
  }
};

const toStorage = (email) => {
  try {
    const emails = JSON.parse(localStorage.getItem("emails")) || [];
    if (emails.includes(email)) {
      return true;
    }
    emails.push(email);
    localStorage.setItem("emails", JSON.stringify(emails));
    return true;
  } catch (e) {
    return false;
  }
};
