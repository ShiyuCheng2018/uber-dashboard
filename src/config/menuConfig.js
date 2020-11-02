import * as React from "react";
import {
    PartitionOutlined,
    ContainerOutlined,
    HomeOutlined,
    BranchesOutlined,
    UnorderedListOutlined
} from "@ant-design/icons";

const MenuList = [
    {
        title: "Dashboard",
        key: "/dashboard",
        icon: <HomeOutlined />
    },
    {
        title: "Products",
        key: "products",
        icon: <ContainerOutlined />,
        children: [
            {
                title: "Product & Data Science",
                key: "/productdatascience",
                icon: "DesktopOutlined"
            },
            {
                title: "Payment",
                key: "/payment",
                icon: "PieChartOutlined"
            },
            {
                title: "Product Design",
                key: "/productdesign",
                icon: "PieChartOutlined"
            },
            {
                title: "Global Scaled Solutions",
                key: "/globalscaledsolutions",
                icon: "PieChartOutlined"
            },
            {
                title: "Business and Developer Products",
                key: "/businessanddeveloperproducts",
                icon: "PieChartOutlined"
            }
        ]
    },
    {
        title: "Technology",
        key: "/technology",
        icon: <BranchesOutlined />,
        children: [
            {
                title: "Product Engineering",
                key: "/productengineering",
                icon: "PieChartOutlined"
            },
            {
                title: "Mobility & Marketplace",
                key: "/mobilitymarketplace",
                icon: "PieChartOutlined"
            },
            {
                title: "Product Platform",
                key: "/productplatform",
                icon: "PieChartOutlined"
            },
            {
                title: "infrastructure",
                key: "/infrastructure",
                icon: "PieChartOutlined"
            },
            {
                title: "Eats Engineering",
                key: "/eatsengineering",
                icon: "PieChartOutlined"
            },
            {
                title: "Technical Program Management",
                key: "/technicalprogrammanagement",
                icon: "PieChartOutlined"
            }
        ]
    },
    {
        title: "Uber ATG",
        key: "/useratg",
        icon: <UnorderedListOutlined />,
        children: [
            {
                title: "Software Engineering",
                key: "/softwareengineering",
                icon: "PieChartOutlined"
            },
            {
                title: "Systems Engineering & Testing",
                key: "/systemsengineeringtesting",
                icon: "PieChartOutlined"
            },
            {
                title: "Hardware & Vehicle",
                key: "/hardwarevehicle",
                icon: "PieChartOutlined"
            },
            {
                title: "supplychain",
                key: "/supplychain",
                icon: "PieChartOutlined"
            },
            {
                title: "safety",
                key: "/saftety",
                icon: "PieChartOutlined"
            },
            {
                title: "research & development",
                key: "/researchdevelopment",
                icon: "PieChartOutlined"
            },
            {
                title: "Product & Design",
                key: "/productanddesign",
                icon: "PieChartOutlined"
            },
            {
                title: "strategy",
                key: "/strategy",
                icon: "PieChartOutlined"
            }
        ]
    },
    {
        title: "Engagement",
        key: "/engagement",
        icon: <PartitionOutlined />,
        children: [
            {
                title: "Uber Works",
                key: "/uberworks",
                icon: "PieChartOutlined"
            },
            {
                title: "Uber Transit",
                key: "/ubertransit",
                icon: "PieChartOutlined"
            },
            {
                title: "Customer Engagement",
                key: "/customerengagement",
                icon: "PieChartOutlined"
            },
            {
                title: "Incubator",
                key: "/incubator",
                icon: "PieChartOutlined"
            }
        ]
    }
];

export default MenuList;
