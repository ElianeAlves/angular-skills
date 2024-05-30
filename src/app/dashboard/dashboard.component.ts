import { LoadingService } from './../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service';
import { ActivatedRoute } from '@angular/router';
import { Skills } from '../models/skills.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {
  cardsBack: Skills[];
  isLoading: boolean;
  cardsFront: Skills[];
  data: Skills[];

  myProjetcs = [
    {name: 'Remate63', description: 'Portal de leilão de gado virtual.', link: 'https://www.remate63.com/'},
    {name: 'Nem Assessoria', description: 'Portal de leilão de gado virtual.', link: 'https://nemassessoria.com.br/'},
    {name: 'Gralha Azul Leilões', description: 'Portal de leilão de gado virtual.', link: 'https://www.gralhaazulleiloes.com.br/'},
    {name: 'Brilhuss', description: 'E-commerce de produtos de hígiene e limpeza.', link: 'https://www.brilhuss.com.br/'},
    {name: 'Caprichos Presentes', description: 'E-commerce de materiais escolares.', link: 'https://caprichospresentes.com.br/'},
    {name: 'Palmas Shopping', description: 'Portal do principal shopping da cidade de Palmas-TO.', link: 'https://www.palmasshopping.com.br/'},
  ]

  constructor(
    private loadingService: LoadingService,
    private skillsService: SkillsService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    // Revisei o db com dados das skills que eu possuo conhecimento 
    this.skillsService.getSkills().subscribe((skills: any) => {
      this.data = skills
      this.cardsFront = skills.filter((item: any) => item.type == 'F')
      this.cardsBack = skills.filter((item: any) => item.type == 'B')
    });

    //Observable que mantém o loading como true até que a requisição ocorra em 3 seg
    this.loadingService.isBooleanObservable.subscribe(
      (res) => {
        this.isLoading = res
      }
    )

    this.route.fragment.subscribe(fragment => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}
