import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/money-out',
        pathMatch: 'full',
    },
    {
        path: 'money-out',
        loadChildren: () =>
            import('./pages/money-out/money-out.module').then(
                (m) => m.MoneyOutPageModule
            )
    },
    {
        path: 'money-in',
        loadChildren: () =>
            import('./pages/money-in/money-in.module').then(
                (m) => m.MoneyInPageModule
            ),
    },
    {
        path: 'total',
        loadChildren: () =>
            import('./pages/total/total.module').then((m) => m.TotalPageModule),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
