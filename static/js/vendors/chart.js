const theme = {
  primary: "var(--gk-primary)",
  secondary: "var(--gk-secondary)",
  success: "var(--gk-success)",
  info: "var(--gk-info)",
  warning: "var(--gk-warning)",
  danger: "var(--gk-danger)",
  dark: "var(--gk-dark)",
  light: "var(--gk-light)",
  white: "var(--gk-white)",
  gray100: "var(--gk-gray-100)",
  gray200: "var(--gk-gray-200)",
  gray300: "var(--gk-gray-300)",
  gray400: "var(--gk-gray-400)",
  gray500: "var(--gk-gray-500)",
  gray600: "var(--gk-gray-600)",
  gray700: "var(--gk-gray-700)",
  gray800: "var(--gk-gray-800)",
  gray900: "var(--gk-gray-900)",
  black: "var(--gk-black)",
  lightPrimary: "var(--gk-light-primary)",
  lightSecondary: "var(--gk-light-secondary)",
  lightSuccess: "var(--gk-light-success)",
  lightDanger: "var(--gk-light-danger)",
  lightWarning: "var(--gk-light-warning)",
  lightInfo: "var(--gk-light-info)",
  darkPrimary: "var(--gk-dark-primary)",
  darkSecondary: "var(--gk-dark-secondary)",
  darkSuccess: "var(--gk-dark-success)",
  darkDanger: "var(--gk-dark-danger)",
  darkWarning: "var(--gk-dark-warning)",
  darkInfo: "var(--gk-dark-info)",
  transparent: "transparent",
  borderColor: "var(--gk-border-color)",
};
(window.theme = theme),
  (function () {
    var e;
    document.getElementById("earning") &&
      ((e = {
        series: [
          {
            name: "Current Month",
            data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38],
          },
        ],
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        chart: {
          fontFamily: "$font-family-base",
          height: "280px",
          type: "line",
          toolbar: { show: !1 },
        },
        colors: [window.theme.primary],
        stroke: { width: 4, curve: "smooth", colors: "#754ffe" },
        xaxis: {
          axisBorder: { show: !1 },
          axisTicks: { show: !1 },
          crosshairs: { show: !0 },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: "13px",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function (e) {
              return e + "k";
            },
            style: {
              fontSize: "13px",
              fontWeight: 400,
              cssClass: "apexcharts-xaxis-label",
            },
            offsetX: -15,
          },
          tickAmount: 3,
          min: 10,
          max: 40,
        },
        grid: {
          borderColor: window.theme.borderColor,
          strokeDashArray: 5,
          xaxis: { lines: { show: !1 } },
          yaxis: { lines: { show: !0 } },
          padding: { top: 0, right: 0, bottom: 0, left: 0 },
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          offsetY: -50,
          fontSize: "16px",
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: window.theme.white,
            fillColors: void 0,
            radius: 12,
            onClick: void 0,
            offsetX: 0,
            offsetY: 0,
          },
          itemMargin: { horizontal: 0, vertical: 20 },
        },
        tooltip: { theme: "light", marker: { show: !0 }, x: { show: !1 } },
        responsive: [
          { breakpoint: 575, options: { legend: { offsetY: -30 } } },
        ],
      }),
      new ApexCharts(document.querySelector("#earning"), e).render()),
      document.getElementById("earningTwo") &&
        ((e = {
          series: [
            {
              name: "Current Month",
              data: [10, 20, 15, 25, 18, 28, 22, 32, 24, 34, 26, 38],
            },
          ],
          labels: [
            "Jan",
            "Feb",
            "March",
            "April",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          chart: {
            fontFamily: "$font-family-base",
            height: "280px",
            type: "line",
            toolbar: { show: !1 },
          },
          colors: [window.theme.primary],
          stroke: { width: 4, curve: "smooth", colors: "#754ffe" },
          xaxis: {
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            crosshairs: { show: !0 },
            labels: {
              offsetX: 0,
              offsetY: 5,
              style: {
                fontSize: "13px",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },
          yaxis: {
            labels: {
              formatter: function (e) {
                return e + "k";
              },
              style: {
                fontSize: "13px",
                fontWeight: 400,
                colors: [window.theme.primary],
              },
              offsetX: -15,
            },
            tickAmount: 3,
            min: 10,
            max: 40,
          },
          grid: {
            borderColor: window.theme.borderColor,
            strokeDashArray: 5,
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            offsetY: -50,
            fontSize: "16px",
            markers: {
              width: 10,
              height: 10,
              strokeWidth: 0,
              strokeColor: window.theme.white,
              fillColors: void 0,
              radius: 12,
              onClick: void 0,
              offsetX: 0,
              offsetY: 0,
            },
            itemMargin: { horizontal: 0, vertical: 20 },
          },
          tooltip: { theme: "light", marker: { show: !0 }, x: { show: !1 } },
          responsive: [
            { breakpoint: 575, options: { legend: { offsetY: -30 } } },
          ],
        }),
        new ApexCharts(document.querySelector("#earningTwo"), e).render()),
      document.getElementById("order") &&
        ((e = {
          series: [
            {
              name: "Days",
              data: [0, 3, 0.5, 3.5, 1, 2.5, 0.5, 4, 1.4, 4.5, 2.5, 4.8],
            },
          ],
          labels: [
            "12 Jan",
            "14 Jan",
            "16 Jan",
            "18 Jan",
            "20 Jan",
            "22 Jan",
            "24 Jan",
            "26 Jan",
            "27 Jan",
            "28 Jan",
            "29 Jan",
            "30 Jan",
          ],
          chart: {
            fontFamily: "$font-family-base",
            height: "280px",
            type: "line",
            toolbar: { show: !1 },
          },
          colors: [window.theme.primary],
          stroke: { width: 4, curve: "smooth", colors: "#754ffe" },
          xaxis: {
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            crosshairs: { show: !0 },
            labels: {
              offsetX: 0,
              offsetY: 5,
              style: {
                fontSize: "13px",
                fontWeight: 400,
                cssClass: "apexcharts-xaxis-label",
              },
            },
          },
          yaxis: {
            labels: {
              formatter: function (e, t) {
                return e.toFixed(0);
              },
              style: {
                fontSize: "13px",
                fontWeight: 400,
                colors: [window.theme.gray500],
              },
              offsetX: -20,
            },
            tickAmount: 3,
            min: 0,
            max: 5,
          },
          grid: {
            borderColor: window.theme.borderColor,
            strokeDashArray: 5,
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            padding: { top: 0, right: 0, bottom: 0, left: -10 },
          },
          legend: {
            position: "top",
            horizontalAlign: "right",
            offsetY: -50,
            fontSize: "16px",
            markers: {
              width: 10,
              height: 10,
              strokeWidth: 0,
              strokeColor: window.theme.white,
              fillColors: void 0,
              radius: 12,
              onClick: void 0,
              offsetX: 0,
              offsetY: 0,
            },
            itemMargin: { horizontal: 0, vertical: 20 },
          },
          tooltip: { theme: "light", marker: { show: !0 }, x: { show: !1 } },
          responsive: [
            { breakpoint: 575, options: { legend: { offsetY: -30 } } },
          ],
        }),
        new ApexCharts(document.querySelector("#order"), e).render()),
      document.getElementById("traffic") &&
        ((e = {
          dataLabels: { enabled: !1 },
          series: [44, 55, 41],
          labels: ["Direct", "Referral", "Organic"],
          colors: [
            window.theme.darkPrimary,
            window.theme.primary,
            window.theme.lightPrimary,
          ],
          chart: { width: 392, type: "donut" },
          plotOptions: { pie: { expandOnClick: !1, donut: { size: "78%" } } },
          legend: {
            labels: { colors: [window.theme.gray500], useSeriesColors: !1 },
            position: "bottom",
            fontFamily: "inter",
            fontWeight: 500,
            fontSize: "14px",
            markers: {
              width: 8,
              height: 8,
              strokeWidth: 0,
              strokeColor: window.theme.white,
              fillColors: void 0,
              radius: 12,
              customHTML: void 0,
              onClick: void 0,
              offsetX: 0,
              offsetY: 0,
            },
            itemMargin: { horizontal: 8, vertical: 0 },
          },
          tooltip: { theme: "light", marker: { show: !0 }, x: { show: !1 } },
          states: { hover: { filter: { type: "none" } } },
          stroke: { show: !0, colors: [window.theme.transparent] },
        }),
        new ApexCharts(document.querySelector("#traffic"), e).render()),
      document.getElementById("orderColumn") &&
        ((e = {
          series: [{ data: [4, 6, 5, 3, 5, 6, 8, 9] }],
          chart: { toolbar: { show: !1 }, type: "bar", height: 272 },
          colors: window.theme.primary,
          plotOptions: {
            bar: { horizontal: !1, columnWidth: "12%", endingShape: "rounded" },
          },
          dataLabels: { enabled: !1 },
          stroke: { show: !0, width: 1, colors: ["transparent"] },
          grid: {
            borderColor: window.theme.borderColor,
            strokeDashArray: 5,
            xaxis: { lines: { show: !1 } },
          },
          xaxis: {
            categories: [
              "1 Jun",
              "9 Jun",
              "16 Jun",
              "18 Jun",
              "19 Jun",
              "22 Jun",
              "24 Jun",
              "26 Jun",
            ],
            axisBorder: { show: !1 },
            labels: {
              offsetX: 0,
              offsetY: 5,
              style: {
                fontSize: "14px",
                fontWeight: 400,
                colors: window.theme.gray500,
              },
            },
          },
          grid: {
            borderColor: window.theme.borderColor,
            strokeDashArray: 5,
            xaxis: { lines: { show: !1 } },
            yaxis: { lines: { show: !0 } },
            padding: { top: 0, right: 0, bottom: 0, left: -10 },
          },
          yaxis: {
            title: { text: void 0 },
            plotOptions: {
              bar: {
                horizontal: !1,
                endingShape: "rounded",
                columnWidth: "80%",
              },
            },
            labels: {
              style: { fontSize: "13px", fontWeight: 400, colors: "#a8a3b9" },
              offsetX: -10,
            },
          },
          fill: { opacity: 1 },
          tooltip: {
            y: {
              formatter: function (e) {
                return e + " sales ";
              },
            },
            marker: { show: !0 },
          },
        }),
        new ApexCharts(document.querySelector("#orderColumn"), e).render()),
      document.getElementById("totalEarning") &&
        ((e = {
          series: [{ data: [50, 80, 5, 90, 12, 150, 12, 80, 150] }],
          chart: { width: 130, type: "line", toolbar: { show: !1 } },
          tooltip: { enabled: !1 },
          stroke: {
            show: !0,
            curve: "smooth",
            lineCap: "butt",
            colors: [window.theme.success],
            width: 2,
            dashArray: 0,
          },
          grid: { show: !1 },
          yaxis: { labels: { show: !1 } },
          xaxis: {
            axisBorder: { show: !1 },
            labels: { show: !1 },
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
            ],
          },
        }),
        new ApexCharts(document.querySelector("#totalEarning"), e).render()),
      document.getElementById("payoutChart") &&
        ((e = {
          series: [{ name: "Inflation", data: [40, 20, 50, 80, 65] }],
          chart: { height: 150, type: "bar", toolbar: { show: !1 } },
          colors: [window.theme.lightPrimary],
          grid: { show: !1 },
          tooltip: { enabled: !1 },
          plotOptions: { bar: { endingShape: "flat", columnWidth: "65%" } },
          dataLabels: { enabled: !1 },
          xaxis: {
            labels: { show: !1 },
            categories: [],
            position: "top",
            axisBorder: { show: !1 },
            axisTicks: { show: !1 },
            tooltip: { enabled: !0 },
          },
          yaxis: { show: !1 },
        }),
        new ApexCharts(document.querySelector("#payoutChart"), e).render()),
      document.getElementById("userChart") &&
        ((e = {
          chart: {
            height: 60,
            type: "area",
            toolbar: { show: !1 },
            sparkline: { enabled: !0 },
            grid: { show: !1, padding: { left: 0, right: 0 } },
          },
          dataLabels: { enabled: !1 },
          stroke: { curve: "smooth", width: 2 },
          colors: [window.theme.primary],
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: [window.theme.primary],
              shadeIntensity: 0.9,
              opacityFrom: 0.5,
              opacityTo: 0.04,
              stops: [0, 80, 100],
            },
          },
          series: [{ name: "User", data: [28, 40, 36, 52, 38, 60, 55] }],
          xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
          yaxis: [
            { y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } },
          ],
          tooltip: { x: { show: !1 } },
        }),
        new ApexCharts(document.querySelector("#userChart"), e).render()),
      document.getElementById("userChartExample") &&
        ((e = {
          chart: {
            height: 60,
            type: "area",
            toolbar: { show: !1 },
            sparkline: { enabled: !0 },
            grid: { show: !1, padding: { left: 0, right: 0 } },
          },
          colors: [window.theme.danger],
          dataLabels: { enabled: !1 },
          stroke: { curve: "smooth", width: 2 },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: [window.theme.danger],
              shadeIntensity: 0.7,
              opacityFrom: 0.5,
              opacityTo: 0.04,
              stops: [0, 80, 100],
            },
          },
          series: [{ name: "User", data: [28, 40, 36, 52, 38, 60, 55] }],
          xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
          yaxis: [
            { y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } },
          ],
          tooltip: { x: { show: !1 } },
        }),
        new ApexCharts(
          document.querySelector("#userChartExample"),
          e
        ).render()),
      document.getElementById("visitorChart") &&
        ((e = {
          chart: {
            height: 60,
            type: "area",
            toolbar: { show: !1 },
            sparkline: { enabled: !0 },
            grid: { show: !1, padding: { left: 0, right: 0 } },
          },
          colors: [window.theme.success],
          dataLabels: { enabled: !1 },
          stroke: { curve: "smooth", width: 2 },
          fill: {
            colors: [window.theme.success],
            type: "gradient",
            gradient: {
              type: "vertical",
              gradientToColors: [window.theme.success],
              shadeIntensity: 0.7,
              opacityFrom: 0.5,
              opacityTo: 0.04,
              stops: [0, 80, 100],
            },
          },
          series: [{ name: "User", data: [28, 40, 36, 52, 38, 60, 55] }],
          xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
          yaxis: [
            { y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } },
          ],
          tooltip: { x: { show: !1 } },
        }),
        new ApexCharts(document.querySelector("#visitorChart"), e).render()),
      document.getElementById("bounceChart") &&
        ((e = {
          chart: {
            height: 60,
            type: "line",
            toolbar: { show: !1 },
            sparkline: { enabled: !0 },
            grid: { show: !1, padding: { left: 0, right: 0 } },
          },
          colors: [window.theme.darkWarning],
          dataLabels: { enabled: !1 },
          stroke: { curve: "straight", width: 4 },
          markers: { size: 4, hover: { size: 6, sizeOffset: 3 } },
          series: [{ name: "Bonus Rate", data: [28, 40, 36, 52, 38, 60, 55] }],
          xaxis: { labels: { show: !1 }, axisBorder: { show: !1 } },
          yaxis: [
            { y: 0, offsetX: 0, offsetY: 0, padding: { left: 0, right: 0 } },
          ],
          tooltip: { x: { show: !1 } },
        }),
        new ApexCharts(document.querySelector("#bounceChart"), e).render()),
      document.getElementById("sessionChart") &&
        ((e = {
          series: [
            {
              name: "Session Duration",
              data: [600, 1e3, 400, 2e3, 500, 900, 2500, 1800, 3800],
              colors: [window.theme.primary],
            },
            {
              name: "Page Views",
              data: [1e3, 2e3, 800, 1200, 300, 1900, 1600, 2e3, 1e3],
            },
            {
              name: "Total Visits",
              data: [2200, 1e3, 3400, 900, 500, 2500, 3e3, 1e3, 2500],
            },
          ],
          chart: {
            toolbar: { show: !1 },
            height: 400,
            type: "line",
            zoom: { enabled: !1 },
          },
          dataLabels: { enabled: !1 },
          stroke: { width: [4, 3, 3], curve: "smooth", dashArray: [0, 5, 4] },
          legend: { show: !1 },
          colors: [
            window.theme.primary,
            window.theme.success,
            window.theme.warning,
          ],
          markers: { size: 0, hover: { sizeOffset: 6 } },
          xaxis: {
            categories: [
              "01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
            ],
            labels: {
              style: {
                fontSize: "12px",
                fontFamily: "Inter",
                cssClass: "apexcharts-xaxis-label",
                colors: window.theme.gray500,
              },
            },
            axisBorder: {
              show: !0,
              color: window.theme.borderColor,
              height: 0,
              width: "100%",
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: !0,
              borderType: "solid",
              color: window.theme.borderColor,
              height: 6,
              offsetX: 0,
              offsetY: 0,
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "12px",
                fontFamily: "Inter",
                cssClass: "apexcharts-xaxis-label",
              },
              offsetX: -12,
              offsetY: 0,
            },
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (e) {
                    return e + " (mins)";
                  },
                },
              },
              {
                title: {
                  formatter: function (e) {
                    return e + " per session";
                  },
                },
              },
              {
                title: {
                  formatter: function (e) {
                    return e;
                  },
                },
              },
            ],
          },
          grid: { borderColor: window.theme.borderColor },
        }),
        new ApexCharts(document.querySelector("#sessionChart"), e).render()),
      document.getElementById("support-chart1") &&
        ((e = {
          chart: { type: "bar", height: 302, sparkline: { enabled: !0 } },
          states: {
            normal: { filter: { type: "none", value: 0 } },
            hover: { filter: { type: "darken", value: 0.55 } },
            active: {
              allowMultipleDataPointsSelection: !1,
              filter: { type: "darken", value: 0.55 },
            },
          },
          colors: [window.theme.primary],
          plotOptions: { bar: { borderRadius: 4, columnWidth: "50%" } },
          series: [
            {
              data: [
                25, 66, 41, 70, 63, 25, 44, 22, 36, 19, 54, 44, 32, 36, 29, 54,
                25, 66, 41, 65, 63, 25, 44, 12, 36, 39, 25, 44, 42, 36, 54,
              ],
            },
          ],
          xaxis: { crosshairs: { width: 1 } },
          tooltip: {
            fixed: { enabled: !1 },
            x: { show: !1 },
            y: {
              title: {
                formatter: function (e) {
                  return "Active User";
                },
              },
            },
            marker: { show: !1 },
          },
        }),
        new ApexCharts(document.querySelector("#support-chart1"), e).render()),
    //   document.getElementById("locationmap") &&
    //     new jsVectorMap({
    //       map: "world",
    //       selector: "#locationmap",
    //       zoomOnScroll: !0,
    //       zoomButtons: !0,
    //       markersSelectable: !0,
    //       markers: [
    //         { name: "United Kingdom", coords: [53.613, -11.6368] },
    //         { name: "India", coords: [20.7504374, 73.7276105] },
    //         { name: "United States", coords: [37.2580397, -104.657039] },
    //         { name: "Australia", coords: [-25.0304388, 115.2092761] },

    //       ],
    //       markerStyle: { initial: { fill: [window.theme.primary] } },
    //       markerLabelStyle: {
    //         initial: {
    //           fontFamily: "Inter",
    //           fontSize: 13,
    //           fontWeight: 500,
    //           cursor: "default",
    //           fill: [window.theme.dark],
    //         },
    //       },
    //       labels: { markers: { render: (e) => e.name } },
    //     }),
      document.getElementById("trafficDountChart") &&
        ((e = {
          series: [60, 55, 12, 17],
          labels: ["Organic Search", "Direct", "Refferrals", "Social Media"],
          colors: [
            window.theme.primary,
            window.theme.success,
            window.theme.danger,
            window.theme.warning,
          ],
          chart: { type: "donut", height: 260 },
          legend: { show: !1 },
          dataLabels: { enabled: !1 },
          plotOptions: { pie: { donut: { size: "50%" } } },
          stroke: { width: 2, colors: [window.theme.transparent] },
        }),
        new ApexCharts(
          document.querySelector("#trafficDountChart"),
          e
        ).render()),
      document.getElementById("operatingSystem") &&
        ((e = {
          series: [55, 88, 80, 75],
          labels: ["Window", "macOS", "Linux", "Android"],
          chart: { type: "polarArea", height: 350 },
          colors: [
            window.theme.danger,
            window.theme.success,
            window.theme.primary,
            window.theme.info,
          ],
          legend: { show: !1 },
          stroke: { colors: [window.theme.borderColor] },
          fill: { opacity: 0.9 },
          plotOptions: {
            polarArea: {
              rings: {
                strokeWidth: 1,
                strokeColor: [window.theme.borderColor],
              },
              spokes: {
                strokeWidth: 1,
                connectorColors: [
                  window.theme.borderColor,
                  window.theme.borderColor,
                  window.theme.borderColor,
                  window.theme.borderColor,
                ],
              },
            },
          },
        }),
        new ApexCharts(document.querySelector("#operatingSystem"), e).render()),
      document.getElementById("expenseChart") &&
        ((e = {
          series: [9e3, 4500, 9030, 6800, 2400, 8320],
          labels: [
            "Design",
            "Sass Service",
            "Development",
            "SEO",
            "Entertainment",
            "Marketing",
          ],
          colors: [
            window.theme.warning,
            window.theme.info,
            window.theme.danger,
            window.theme.primary,
            window.theme.info,
            window.theme.success,
          ],
          chart: { type: "donut", height: 450 },
          legend: { show: !1 },
          dataLabels: { enabled: !1 },
          plotOptions: {
            pie: {
              customScale: 0.8,
              startAngle: 55,
              endAngle: 360,
              expandOnClick: !1,
              donut: {
                size: "70%",
                labels: {
                  show: !0,
                  name: { show: !0, offsetY: 26 },
                  value: {
                    show: !0,
                    fontSize: "42px",
                    color: void 0,
                    offsetY: -20,
                    fontWeight: "700",
                    formatter: function (e) {
                      return "$" + e;
                    },
                  },
                  total: {
                    show: !0,
                    label: "Total Spent",
                    fontSize: "20px",
                    color: window.theme.gray400,
                    fontWeight: "600",
                    formatter: function (e) {
                      return (
                        "$" + e.globals.seriesTotals.reduce((e, t) => e + t, 0)
                      );
                    },
                  },
                },
              },
            },
          },
          stroke: { width: 2 },
          responsive: [
            {
              breakpoint: 480,
              options: { chart: { type: "donut", width: 290, height: 410 } },
            },
          ],
        }),
        new ApexCharts(document.querySelector("#expenseChart"), e).render()),
      document.getElementById("taskSummary") &&
        ((e = {
          series: [
            {
              name: "Closed",
              type: "column",
              data: [12, 18, 20, 32, 19, 25, 30],
            },
            { name: "New", type: "line", data: [20, 32, 28, 50, 38, 35, 49] },
          ],
          chart: { height: 350, type: "line", toolbar: { show: !1 } },
          plotOptions: {
            bar: { horizontal: !1, columnWidth: "40%", borderRadius: 5 },
          },
          markers: {
            colors: [window.theme.dark],
            fillColor: window.theme.gray200,
          },
          colors: [window.theme.lightPrimary, window.theme.primary],
          legend: { show: !1 },
          stroke: { width: [0, 4], colors: [window.theme.lightPrimary] },
          dataLabels: { enabled: !0, enabledOnSeries: [1] },
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          xaxis: {
            labels: {
              style: {
                fontSize: "13px",
                fontWeight: 400,
                colors: window.theme.gray500,
                fontFamily: "inter",
              },
            },
            axisBorder: {
              show: !0,
              color: window.theme.borderColor,
              height: 0,
              width: "100%",
              offsetX: 0,
              offsetY: 0,
            },
            axisTicks: {
              show: !0,
              borderType: "solid",
              color: window.theme.borderColor,
              height: 6,
              offsetX: 0,
              offsetY: 0,
            },
          },
          yaxis: {
            labels: {
              style: {
                fontSize: "13px",
                fontWeight: 400,
                colors: window.theme.gray500,
                fontFamily: "inter",
              },
            },
          },
          grid: { borderColor: window.theme.borderColor },
        }),
        new ApexCharts(document.querySelector("#taskSummary"), e).render()),
      document.getElementById("taskSectionchart") &&
        ((e = {
          series: [44, 65, 89, 75],
          chart: { height: 400, type: "radialBar" },
          legend: {
            show: !0,
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 500,
            position: "bottom",
            itemMargin: { horizontal: 8, vertical: 0 },
            labels: { colors: window.theme.gray500, useSeriesColors: !1 },
            markers: { width: 8, height: 8, offsetY: 1, offsetX: -2 },
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {},
                value: {
                  fontSize: "24px",
                  fontWeight: 600,
                  formatter: function (e) {
                    return e;
                  },
                },
                total: {
                  show: !0,
                  label: "Total",
                  fontSize: "12px",
                  formatter: function (e) {
                    return 273;
                  },
                },
              },
              track: { background: window.theme.borderColor, margin: 10 },
            },
          },
          labels: ["Design", "Frontend", "Development", "Issues"],
          colors: [
            window.theme.primary,
            window.theme.success,
            window.theme.info,
            window.theme.warning,
          ],
        }),
        new ApexCharts(
          document.querySelector("#taskSectionchart"),
          e
        ).render()),
      document.getElementById("budgetExpenseChart") &&
        ((e = {
          series: [{ name: "Series 1", data: [90, 32, 30, 40, 100, 20] }],
          stroke: {
            show: !0,
            width: 2,
            colors: [window.theme.primary],
            dashArray: 0,
          },
          fill: { colors: "#754ffe", opacity: 0.4 },
          colors: [window.theme.primary],
          dataLabels: {
            enabled: !0,
            background: { enabled: !0, borderRadius: 2 },
          },
          chart: { height: 350, type: "radar", toolbar: { show: !1 } },
          plotOptions: {
            radar: {
              size: 150,
              offsetX: 0,
              offsetY: 0,
              polygons: {
                strokeColors: window.theme.borderColor,
                strokeWidth: 1,
                connectorColors: window.theme.borderColor,
                fill: { colors: void 0 },
              },
            },
          },
          xaxis: {
            categories: [
              "Design",
              "SaaS Services",
              "Development",
              "SEO",
              "Entertainment",
              "Marketing",
            ],
            labels: {
              show: !0,
              style: {
                colors: [
                  window.theme.gray400,
                  window.theme.gray400,
                  window.theme.gray400,
                  window.theme.gray400,
                  window.theme.gray400,
                  window.theme.gray400,
                ],
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: 600,
              },
            },
          },
        }),
        new ApexCharts(
          document.querySelector("#budgetExpenseChart"),
          e
        ).render()),
      0 < document.querySelectorAll(".taskWireframeChart").length &&
        ((e = {
          series: [65],
          chart: { height: 40, width: 40, type: "radialBar" },
          grid: {
            show: !1,
            padding: { left: -15, right: -15, top: -12, bottom: -15 },
          },
          colors: [window.theme.success],
          plotOptions: {
            radialBar: {
              hollow: { size: "30%" },
              dataLabels: {
                showOn: "always",
                name: {
                  show: !0,
                  fontSize: "11px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: 4,
                },
                value: { show: !1 },
              },
            },
          },
          stroke: { lineCap: "round" },
          labels: ["65%"],
        }),
        new ApexCharts(
          document.querySelector(".taskWireframeChart"),
          e
        ).render()),
      0 < document.querySelectorAll(".taskPrototypeChart").length &&
        ((e = {
          series: [75],
          chart: { height: 40, width: 40, type: "radialBar" },
          grid: {
            show: !1,
            padding: { left: -15, right: -15, top: -12, bottom: -15 },
          },
          colors: [window.theme.success],
          plotOptions: {
            radialBar: {
              hollow: { size: "30%" },
              dataLabels: {
                showOn: "always",
                name: {
                  show: !0,
                  fontSize: "11px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: 4,
                },
                value: { show: !1 },
              },
            },
          },
          stroke: { lineCap: "round" },
          labels: ["75%"],
        }),
        new ApexCharts(
          document.querySelector(".taskPrototypeChart"),
          e
        ).render()),
      0 < document.querySelectorAll(".taskContentChart").length &&
        ((e = {
          series: [85],
          chart: { height: 40, width: 40, type: "radialBar" },
          grid: {
            show: !1,
            padding: { left: -15, right: -15, top: -12, bottom: -15 },
          },
          colors: [window.theme.success],
          plotOptions: {
            radialBar: {
              hollow: { size: "30%" },
              dataLabels: {
                showOn: "always",
                name: {
                  show: !0,
                  fontSize: "11px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: 4,
                },
                value: { show: !1 },
              },
            },
          },
          stroke: { lineCap: "round" },
          labels: ["85%"],
        }),
        new ApexCharts(
          document.querySelector(".taskContentChart"),
          e
        ).render()),
      0 < document.querySelectorAll(".taskFigmaChart").length &&
        ((e = {
          series: [40],
          chart: { height: 40, width: 40, type: "radialBar" },
          grid: {
            show: !1,
            padding: { left: -15, right: -15, top: -12, bottom: -15 },
          },
          colors: [window.theme.success],
          plotOptions: {
            radialBar: {
              hollow: { size: "30%" },
              dataLabels: {
                showOn: "always",
                name: {
                  show: !0,
                  fontSize: "11px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: 4,
                },
                value: { show: !1 },
              },
            },
          },
          stroke: { lineCap: "round" },
          labels: ["40%"],
        }),
        new ApexCharts(document.querySelector(".taskFigmaChart"), e).render()),
      0 < document.querySelectorAll(".taskInterfaceChart").length &&
        ((e = {
          series: [35],
          chart: { height: 40, width: 40, type: "radialBar" },
          grid: {
            show: !1,
            padding: { left: -15, right: -15, top: -12, bottom: -15 },
          },
          colors: [window.theme.success],
          plotOptions: {
            radialBar: {
              hollow: { size: "30%" },
              dataLabels: {
                showOn: "always",
                name: {
                  show: !0,
                  fontSize: "11px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: 4,
                },
                value: { show: !1 },
              },
            },
          },
          stroke: { lineCap: "round" },
          labels: ["35%"],
        }),
        new ApexCharts(
          document.querySelector(".taskInterfaceChart"),
          e
        ).render()),
      document.getElementById("taskStatus") &&
        ((e = {
          dataLabels: { enabled: !1 },
          series: [75, 25],
          labels: ["Completed", "Incomplete"],
          colors: [window.theme.primary, window.theme.info],
          chart: { width: 480, type: "donut" },
          plotOptions: { pie: { expandOnClick: !1, donut: { size: "75%" } } },
          legend: {
            position: "bottom",
            fontFamily: "inter",
            fontWeight: 500,
            fontSize: "14px",
            markers: {
              width: 8,
              height: 8,
              strokeWidth: 0,
              strokeColor: window.theme.white,
              fillColors: void 0,
              radius: 12,
              customHTML: void 0,
              onClick: void 0,
              offsetX: -2,
              offsetY: 1,
            },
            itemMargin: { horizontal: 8, vertical: 0 },
          },
          tooltip: { theme: "light", marker: { show: !0 }, x: { show: !1 } },
          states: { hover: { filter: { type: "none" } } },
          stroke: { show: !0, colors: [window.theme.transparent] },
          responsive: [
            {
              breakpoint: 1400,
              options: { chart: { type: "donut", width: 290, height: 410 } },
            },
          ],
        }),
        new ApexCharts(document.querySelector("#taskStatus"), e).render()),
      document.getElementById("progressChart") &&
        ((e = {
          series: [75],
          chart: { height: 350, type: "radialBar", toolbar: { show: !1 } },
          colors: [window.theme.primary, window.theme.warning],
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: "70%",
                background: window.theme.white,
                image: void 0,
                imageOffsetX: 0,
                imageOffsetY: 0,
                position: "front",
                dropShadow: {
                  enabled: !0,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24,
                },
              },
              track: {
                background: window.theme.white,
                strokeWidth: "67%",
                margin: 0,
                dropShadow: {
                  enabled: !0,
                  top: -3,
                  left: 0,
                  blur: 4,
                  opacity: 0.35,
                },
              },
              dataLabels: {
                showOn: "always",
                name: { show: !1 },
                value: {
                  formatter: function (e) {
                    return parseInt(e) + "%";
                  },
                  color: window.theme.dark,
                  fontSize: "48px",
                  fontWeight: "700",
                  show: !0,
                },
              },
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: [window.theme.warning],
              inverseColors: !1,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            },
          },
          stroke: { lineCap: "round" },
        }),
        new ApexCharts(document.querySelector("#progressChart"), e).render()),
      0 < document.querySelectorAll(".resultChart").length &&
        ((e = {
          series: [85],
          chart: { height: 110, width: 110, type: "radialBar" },
          grid: {
            show: !1,
            padding: { left: -15, right: -15, top: -12, bottom: -15 },
          },
          colors: [window.theme.success],
          plotOptions: {
            radialBar: {
              hollow: {
                margin: -2,
                size: "50%",
                background: [window.theme.lightSuccess],
              },
              dataLabels: {
                showOn: "always",
                name: {
                  show: !0,
                  fontSize: "20px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: 7,
                },
                value: { show: !1 },
              },
            },
          },
          stroke: { lineCap: "round" },
          labels: ["85%"],
        }),
        new ApexCharts(document.querySelector(".resultChart"), e).render());
  })();