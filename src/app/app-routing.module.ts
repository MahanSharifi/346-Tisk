import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Children } from 'react';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { TechExperiencesComponent } from './tech-experiences/tech-experiences.component';
import { VBACalcComponent } from './vba-calc/vba-calc.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/Home', 
    pathMatch: 'full' 
  },
  { 
    path: 'Home', 
    component: HeaderComponent,
    children: [
      { 
        path: '', 
        component: IntroComponent,
          children: [
            {
            path: '',
            component: TechExperiencesComponent,
            children: [
              
                
                        {
                          path: '', 
                          component: VBACalcComponent,
                          
                            children: [
                              {
                                path: '',
                                component: ContactComponent
                              }
                            ]
                      }
            ]
          },
        ] 
      },
    ]
  },
  { 
    path: 'Contact', 
    component: ContactComponent 
  },
  { 
    path: 'TECH', 
    component: TechExperiencesComponent
  },
  { 
    path: 'About', 
    component: IntroComponent 
  },
  { 
    path: 'VBA', 
    component: VBACalcComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
  
})

export class AppRoutingModule {
 }

