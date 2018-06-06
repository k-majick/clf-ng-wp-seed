import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { Router } from '@angular/router';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Nav from '../../services/Nav';

@Component({
  selector: 'clf-header',
  templateUrl: './header.component.html',
  providers: [NavService],
})
export class HeaderComponent implements OnInit {

  menuItems: Nav;
  menuItemsChildren: Nav;

  constructor(
    public translate: TranslateService,
    private navService: NavService,
    private router: Router,
  ) {
    this.translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit(): void {
    this.navService
      .getNav('16')
      .subscribe(resItem => (
        this.menuItems = resItem['items']
      ));
  }

  goHomePage() {
    this.router.navigate(['']);
  }
}
