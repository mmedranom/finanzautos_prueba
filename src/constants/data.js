import images from "./images"

const data = {
    dataTable: [
        {name: "Empresa 1",
        sec: "Gastronomia",
        description: "Procafecol S.A. nace en 2002 con el objetivo de generar negocios de valor agregado para los caficultores y su marca Juan Valdez® que cuenta con cuatro líneas de negocio: Tiendas especializadas, grandes superficies, canal institucional y el portal e-commerce. Nuestra relación con los caficultores colombianos es por varias vías: la primera, es el reconocimiento a la calidad de su café mediante el pago de una prima por calidad; la segunda, es el posicionamiento del café de Colombia en el mundo; y la tercera, es el compromiso permanente de generar valor al Fondo Nacional del Café (FoNC) para la generación de bienes públicos y los proyectos de Sostenibilidad en Acción® de la Federación de Cafeteros de Colombia. A lo largo de diez años y con importantes inversiones, logramos conformar un equipo sinérgico con conocimiento y experiencia; tenemos más de 300 tiendas operando en Colombia y más de 100 en el mundo, siendo líderes en la categoría de grandes superficies. El Café Premium Colombiano Juan Valdez nos posiciona como la marca más reconocida y admirada en nuestro país, consolidando nuestro modelo de expansión a nuevos mercados en el mundo.",
        risk: "Medio (61%)",
        type: "tipo 1",
        class: "40%",
        apr: 5,
        des:4
        },
        {name: "Empresa 2",
        sec: "Ecommerce",
        description: "Procafecol S.A. nace en 2002 con el objetivo de generar negocios de valor agregado para los caficultores y su marca Juan Valdez® que cuenta con cuatro líneas de negocio: Tiendas especializadas, grandes superficies, canal institucional y el portal e-commerce. Nuestra relación con los caficultores colombianos es por varias vías: la primera, es el reconocimiento a la calidad de su café mediante el pago de una prima por calidad; la segunda, es el posicionamiento del café de Colombia en el mundo; y la tercera, es el compromiso permanente de generar valor al Fondo Nacional del Café (FoNC) para la generación de bienes públicos y los proyectos de Sostenibilidad en Acción® de la Federación de Cafeteros de Colombia. A lo largo de diez años y con importantes inversiones, logramos conformar un equipo sinérgico con conocimiento y experiencia; tenemos más de 300 tiendas operando en Colombia y más de 100 en el mundo, siendo líderes en la categoría de grandes superficies. El Café Premium Colombiano Juan Valdez nos posiciona como la marca más reconocida y admirada en nuestro país, consolidando nuestro modelo de expansión a nuevos mercados en el mundo.",

        risk: "Bajo (32%)",
        type: "tipo 1",
        class: "65%",
        apr: 5,
        des:4
        },
        {name: "Empresa 3",
        sec: "Gastronomia",
        description: "Procafecol S.A. nace en 2002 con el objetivo de generar negocios de valor agregado para los caficultores y su marca Juan Valdez® que cuenta con cuatro líneas de negocio: Tiendas especializadas, grandes superficies, canal institucional y el portal e-commerce. Nuestra relación con los caficultores colombianos es por varias vías: la primera, es el reconocimiento a la calidad de su café mediante el pago de una prima por calidad; la segunda, es el posicionamiento del café de Colombia en el mundo; y la tercera, es el compromiso permanente de generar valor al Fondo Nacional del Café (FoNC) para la generación de bienes públicos y los proyectos de Sostenibilidad en Acción® de la Federación de Cafeteros de Colombia. A lo largo de diez años y con importantes inversiones, logramos conformar un equipo sinérgico con conocimiento y experiencia; tenemos más de 300 tiendas operando en Colombia y más de 100 en el mundo, siendo líderes en la categoría de grandes superficies. El Café Premium Colombiano Juan Valdez nos posiciona como la marca más reconocida y admirada en nuestro país, consolidando nuestro modelo de expansión a nuevos mercados en el mundo.",

        risk: "Bajo (23%)",
        type: "tipo 1",
        class: "71%",
        apr: 5,
        des:4
        },
        {name: "Empresa 4",
        sec: "Entretenimiento",
        description: "Procafecol S.A. nace en 2002 con el objetivo de generar negocios de valor agregado para los caficultores y su marca Juan Valdez® que cuenta con cuatro líneas de negocio: Tiendas especializadas, grandes superficies, canal institucional y el portal e-commerce. Nuestra relación con los caficultores colombianos es por varias vías: la primera, es el reconocimiento a la calidad de su café mediante el pago de una prima por calidad; la segunda, es el posicionamiento del café de Colombia en el mundo; y la tercera, es el compromiso permanente de generar valor al Fondo Nacional del Café (FoNC) para la generación de bienes públicos y los proyectos de Sostenibilidad en Acción® de la Federación de Cafeteros de Colombia. A lo largo de diez años y con importantes inversiones, logramos conformar un equipo sinérgico con conocimiento y experiencia; tenemos más de 300 tiendas operando en Colombia y más de 100 en el mundo, siendo líderes en la categoría de grandes superficies. El Café Premium Colombiano Juan Valdez nos posiciona como la marca más reconocida y admirada en nuestro país, consolidando nuestro modelo de expansión a nuevos mercados en el mundo.",

        type: "tipo 1",
        risk: "Alto (87%)",
        class: "12%",
        apr: 5,
        des:4
        },
        {name: "Empresa 5",
        sec: "Deporte",
        description: "Procafecol S.A. nace en 2002 con el objetivo de generar negocios de valor agregado para los caficultores y su marca Juan Valdez® que cuenta con cuatro líneas de negocio: Tiendas especializadas, grandes superficies, canal institucional y el portal e-commerce. Nuestra relación con los caficultores colombianos es por varias vías: la primera, es el reconocimiento a la calidad de su café mediante el pago de una prima por calidad; la segunda, es el posicionamiento del café de Colombia en el mundo; y la tercera, es el compromiso permanente de generar valor al Fondo Nacional del Café (FoNC) para la generación de bienes públicos y los proyectos de Sostenibilidad en Acción® de la Federación de Cafeteros de Colombia. A lo largo de diez años y con importantes inversiones, logramos conformar un equipo sinérgico con conocimiento y experiencia; tenemos más de 300 tiendas operando en Colombia y más de 100 en el mundo, siendo líderes en la categoría de grandes superficies. El Café Premium Colombiano Juan Valdez nos posiciona como la marca más reconocida y admirada en nuestro país, consolidando nuestro modelo de expansión a nuevos mercados en el mundo.",

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