

// const activePage = window.location.pathname,
// navLinks = document.querySelectorAll('nav ul li a');

// for(link of navLinks) {
//     if(link.href.includes(`${activePage}`)) {
//         link.classList.add('active');
//     }
// }


    let pathname = window.location.pathname;
    document.querySelectorAll('nav ul li a').forEach(link => {

      // console.log(pathname)
      if(link.href.includes(`${pathname}`)) {

        // console.log(link)
      }
    })