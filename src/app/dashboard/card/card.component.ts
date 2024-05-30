import { Skills } from 'src/app/models/skills.model';
import { SkillsService } from './../../services/skills.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card: Skills;
  isLoading: boolean = false
  progress: boolean = false

  constructor(
    private skillsService: SkillsService
  ) { }


  onLike(card: any) {
    // TODO: incrementar o like, salvar via rest
    const body = {
      ...card,
      likes: card.likes + 1
    };
    this.progress = true


    this.skillsService.patchSkills(card.id, body).subscribe((res: any) => {
      // Adicionei o loading completo na tela devido ao tempo de resposta da requisição
      this.progress = false


      //Ao sucesso do put dos dados, valor do card é incrementado em 1
      card.likes++

    }, error => {
      console.error('Erro ao incrementar likes:', error);
    });

  }

  onShare() {
    // TODO: abrir o link do seu linkedin
    // Entedido que a função deve abrir meu perfil do linkedin
    window.open(`https://www.linkedin.com/in/eliane-alves96/`, '_blank');


    // abre a janela de nova publicação no linkedin
    // let url = window.location.href
    // window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
  }

  openDoc(url: string){
    window.open(url, '_blank')
  }


}
