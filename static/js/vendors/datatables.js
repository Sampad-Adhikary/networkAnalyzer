var dataTableBasic = document.querySelector("#dataTableBasic"),
  dataTableButtons =
    (dataTableBasic &&
      document.addEventListener("DOMContentLoaded", function () {
        new DataTable(dataTableBasic, {
          responsive: !0,
          pagingType: "numbers",
        // paging:false,
        info: true,
        language: {
            info: "Showing 1 to 5 of 57 entries"
        }
        });
      }),
    document.querySelector("#dataTableButtons"));
dataTableButtons &&
  document.addEventListener("DOMContentLoaded", function () {
    new DataTable(dataTableButtons, {
      responsive: !0,
      dom: "<'row align-items-center'<'col-xl-6 col-12 ps-lg-6 px-4 py-2'B><'col-xl-4 col-12 d-xl-flex justify-content-end'f><'col-xl-2 d-xl-flex justify-content-end'l><'col-sm-12'tr<br/>>><'row align-items-center border-top mx-0'<'col-sm-6'i><'col-sm-6'p>>",
      buttons: [
        {
          text: "colvis",
          className: "btn btn-light mb-1",
          action: function (t, e, n, a) {
            n.classList.remove("btn-secondary"), e.button(n).trigger();
          },
        },
        {
          text: "copyHtml5",
          className: "btn btn-light mb-1",
          action: function (t, e, n, a) {
            n.classList.remove("btn-secondary"), e.button(n).trigger();
          },
        },
        {
          text: "csvHtml5",
          className: "btn btn-light mb-1",
          action: function (t, e, n, a) {
            n.classList.remove("btn-secondary"), e.button(n).trigger();
          },
        },
        {
          text: "pdfHtml5",
          className: "btn btn-light mb-1",
          action: function (t, e, n, a) {
            n.classList.remove("btn-secondary"), e.button(n).trigger();
          },
        },
        {
          text: "print",
          className: "btn btn-light mb-1",
          action: function (t, e, n, a) {
            n.classList.remove("btn-secondary"), e.button(n).trigger();
          },
        },
      ],
      pagingType: "numbers",
    });
  });


var dataTableBasic2 = document.querySelector("#dataTableBasic2"),
dataTableButtons =
(dataTableBasic2 &&
  document.addEventListener("DOMContentLoaded", function () {
    new DataTable(dataTableBasic2, {
      responsive: !0,
      pagingType: "numbers",
    // paging:false,
    info: true,
    language: {
        info: "Showing 1 to 5 of 34 entries"
    }
    });
  }),
document.querySelector("#dataTableButtons2"));
dataTableButtons &&
document.addEventListener("DOMContentLoaded", function () {
new DataTable(dataTableButtons, {
  responsive: !0,
  dom: "<'row align-items-center'<'col-xl-6 col-12 ps-lg-6 px-4 py-2'B><'col-xl-4 col-12 d-xl-flex justify-content-end'f><'col-xl-2 d-xl-flex justify-content-end'l><'col-sm-12'tr<br/>>><'row align-items-center border-top mx-0'<'col-sm-6'i><'col-sm-6'p>>",
  buttons: [
    {
      text: "colvis",
      className: "btn btn-light mb-1",
      action: function (t, e, n, a) {
        n.classList.remove("btn-secondary"), e.button(n).trigger();
      },
    },
    {
      text: "copyHtml5",
      className: "btn btn-light mb-1",
      action: function (t, e, n, a) {
        n.classList.remove("btn-secondary"), e.button(n).trigger();
      },
    },
    {
      text: "csvHtml5",
      className: "btn btn-light mb-1",
      action: function (t, e, n, a) {
        n.classList.remove("btn-secondary"), e.button(n).trigger();
      },
    },
    {
      text: "pdfHtml5",
      className: "btn btn-light mb-1",
      action: function (t, e, n, a) {
        n.classList.remove("btn-secondary"), e.button(n).trigger();
      },
    },
    {
      text: "print",
      className: "btn btn-light mb-1",
      action: function (t, e, n, a) {
        n.classList.remove("btn-secondary"), e.button(n).trigger();
      },
    },
  ],
  pagingType: "numbers",
});
});
