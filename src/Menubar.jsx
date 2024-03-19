import React from 'react';
import { Menubar } from 'primereact/menubar';
// import { useRouter } from 'next/router';
import './menubar.css'

export default function RouterDemo() {
    // const router = useRouter();
    const items = [
        {
            label: 'دخول',
            icon: 'pi pi-arrow-left',
            url: '/login',
            className:'btn-primary' 

            // items: [
            //     {
            //         label: 'Styled',
            //         url: '/theming'
            //     },
            //     {
            //         label: 'Unstyled',
            //         url: '/unstyled'
            //     }
            // ]
        },
        {

            label: 'عضو جديد',
            icon: 'pi pi-user-plus',
            url: '/register'
        },
        {

            label: 'اضافة اعلان',
            icon: 'pi pi-plus-circle',
            url: '/new-ad',
            className: 'new-ad-btn'
        }
        // {
        //     label: 'Programmatic',
        //     icon: 'pi pi-link',
        //     command: () => {
        //         router.push('/installation');
        //     }
        // },
        // {
        //     label: 'External',
        //     icon: 'pi pi-home',
        //     items: [
        //         {
        //             label: 'React.js',
        //             url: 'https://react.dev/'
        //         },
        //         {
        //             label: 'Vite.js',
        //             url: 'https://vitejs.dev/'
        //         }
        //     ]
        // }
    ];

    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
