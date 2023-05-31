import images from "./images"

const data = {
    dataTable: [
        {name: "Empresa 1",
        sec: "Gastronomia",
        risk: "Medio (61%)",
        type: "tipo 1",
        class: "40%",
        apr: 5,
        des:4
        },
        {name: "Empresa 2",
        sec: "Ecommerce",
        risk: "Bajo (32%)",
        type: "tipo 1",
        class: "65%",
        apr: 5,
        des:4
        },
        {name: "Empresa 3",
        sec: "Gastronomia",
        risk: "Bajo (23%)",
        type: "tipo 1",
        class: "71%",
        apr: 5,
        des:4
        },
        {name: "Empresa 4",
        sec: "Entretenimiento",
        type: "tipo 1",
        risk: "Alto (87%)",
        class: "12%",
        apr: 5,
        des:4
        },
        {name: "Empresa 5",
        sec: "Deporte",
        risk: "Medio (55%)",
        type: "tipo 1",
        class: "37%",
        apr: 5,
        des:4
        },
    ]
    ,
    user: {
        name: 'User',
        img: images.logo
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$678',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data