// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { useNavigate } from 'react-router-dom';

import SideNavigation, { SideNavigationProps } from '@cloudscape-design/components/side-navigation';

type SideNavProps = {
    activeHref: string;
};

export default function SideNav({ activeHref }: SideNavProps) {
    const navigate = useNavigate();

    const sideNavItems: SideNavigationProps.Item[] = [
        {
            type: 'link',
            text: 'Conversations',
            href: '/conversations',
        },
        {
            type: 'link',
            text: 'New Conversation',
            href: '/new',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Generate Audio',
            href: '/generate',
        },
        { type: 'divider' },
        {
            type: 'link',
            text: 'Settings',
            href: '/settings',
        },
        
    ];

    return (
        <SideNavigation
            activeHref={activeHref}
            header={{ text: 'AccionHealth', href: '/' }}
            items={sideNavItems}
            onFollow={(e) => {
                e.preventDefault();
                if (e.detail.external === true) {
                    window.open(e.detail.href, '_blank', 'noopener');
                    return;
                }
                navigate(e.detail.href, { relative: 'route' });
            }}
        />
    );
}
