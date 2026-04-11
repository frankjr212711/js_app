const activePage = window.location.pathname;
const linkBg = document.querySelector(".linkBg");
const sidebar = document.querySelector(".sidebar");
const links = document.querySelectorAll(".nav_links li a");
const burger_menu = document.querySelector(".burger_menu");
const settings_icon = document.querySelector('.settings_icon');
const toggle_switch = document.querySelector('.toggle_switch');
const search_form = document.querySelector("nav .search_form");
const sidebar_links = document.querySelectorAll(".sidebar ul li a");


settings_icon.addEventListener("click", function () {
  document.querySelector(".notification_panel").classList.toggle("active");
});

document
  .querySelector(".notification_panel")
  .addEventListener("mouseleave", function () {
    this.classList.remove("active");
  });

for (let link of links) {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
}

function toggleFn() {
  const toggle_input = toggle_switch.querySelector('input');
  toggle_input.addEventListener('change', function (e) {
    document.body.classList.toggle('bg_color');
    document.querySelector('.notification_panel').classList.toggle('enter_color')
  })
};

burger_menu.addEventListener("click", function (e) {
  document.body.classList.toggle("open");
});

sidebar.addEventListener("mouseleave", function () {
  document.body.classList.remove("open");
});

for (let link of sidebar_links) {
  link.addEventListener("mouseenter", function (e) {
    const coords = {
      width: link.getBoundingClientRect().width,
      height: link.getBoundingClientRect().height,
      top: link.getBoundingClientRect().top,
      bottom: link.getBoundingClientRect().bottom,
      left: link.getBoundingClientRect().left,
      right: link.getBoundingClientRect().right,
    };

    linkBg.style.setProperty("width", `${coords.width}px`);
    linkBg.style.setProperty("height", `${coords.height}px`);
    linkBg.style.setProperty("top", `${coords.top}px`);
    linkBg.style.setProperty("bottom", `${coords.bottom}px`);
    linkBg.style.setProperty("left", `${coords.left}px`);
    linkBg.style.setProperty("right", `${coords.right}px`);
    // console.log(coords.width);
  });
}

search_form?.addEventListener("submit", function (e) {
  e.preventDefault();
  const form_row = e.target.querySelector(".form_row");
  const search_value = form_row.querySelector("input[type='search']").value;

  if (search_value == "") return;
  //   document.querySelector("input[type='search']").value = "";

  setTimeout(() => {
    document.querySelector('.search_form input').value = ''
    console.log('timeout')
  }, 1000);
  //   console.log(search_value);
});

document.querySelector('.search_form')?.addEventListener('mouseenter', function () {
  search_form.classList.add('wide');
  const form_row = this.querySelector('.form_row');
  const form_input = form_row.querySelector('input');
  form_input.style.setProperty('border-color', 'deeppink');
  console.log(form_input)
})

document.querySelector('.search_form')?.addEventListener('mouseleave', function () {
  search_form.classList.remove('wide')
  const form_row = this.querySelector('.form_row');
  const form_input = form_row.querySelector('input');
  form_input.style.removeProperty('border-color');
})
   const activeLink = window.location.pathname;

        document.querySelectorAll('.sample_btns li a').forEach(link => {
            if(link.href.includes(`${activeLink}`)) {
              link.classList.add('triggered');
            }
            console.log(activeLink)
        })
        
        
        
        const scrollUpBtn = document.querySelector('.scroll_up_btn');
        
        scrollUpBtn.addEventListener('click', function() {
          document.querySelector('.content').scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        console.log(this);
        })
        
        
window.onload = toggleFn 