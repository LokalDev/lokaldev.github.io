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
const showSuccessDialog = () => {
  Swal.fire({
    width: "40rem",
    showConfirmButton: false,
    html: `
      <div class="flex flex-col justify-center items-center" style="padding: 1rem;">
        <div class="flex flex-col justify-center items-center">
              <img
            class="logo mb-5"
            src="assets/logo-yellow.png"
            alt="FudLokal Logo"
            />
            <h4 class="font-bold text-xl sm:text-2xl lg:text-3xl" style="color: #f7941e">
                Salamat! We're thrilled to <br> have you on board!
            </h4>
            <p class="text-md sm:text-lg lg:text-xl" style="margin: 2rem 0">One last request, Help us grow by sharing our website on <br> social media. Click the icons below to spread the word.</p>
            <div style="width: 100%; display: flex; justify-content: space-around;">
                <a href="https://www.facebook.com/LokalFud-115925864815444/" target="_blank">
                    <img
                    class=""
                    src="assets/facebook.png"
                    alt="Facebook Logo"
                    
                    />
                </a>
<!--                <a href="" target="_blank">-->
<!--                    <img-->
<!--                    class=""-->
<!--                    src="assets/tiktok.png"-->
<!--                    alt="Tiktok Logo"-->
<!--                    />-->
<!--                </a>-->
                <a href="https://twitter.com/compose/tweet?text=Subscribe to http://lokalfud.com/ newsletter to gain an early access to the platform!" target="_blank">
                    <img
                    class=""
                    src="assets/twitter.png"
                    alt="Twitter Logo"
                    />
                </a>
<!--                <a href="" target="_blank">-->
<!--                    <img-->
<!--                    class=""-->
<!--                    src="assets/pinterest.png"-->
<!--                    alt="Pinterest Logo"-->
<!--                    />-->
<!--                </a>-->
            </div>
        </div>
      </div>
    `,
  });
};
const saveEmail = (e) => {
  const defaultSearch = document.getElementById("default-search");
  const email = !!defaultSearch ? defaultSearch.value.toLowerCase() : null;
  if (email) {
    toStorage(email);
    showSuccessDialog();
    defaultSearch.value = null;
  }
  e.preventDefault();
};

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const form = document.getElementById("the-form");
    form.addEventListener("submit", saveEmail, false);
  },
  false
);
