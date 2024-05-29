import { LoadingService } from './../../services/loading.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {

  @Input() card: any;
  isLoading: boolean = false;
  constructor(private httpClient: HttpClient,
    private loadingService: LoadingService
  ) { }
  private apiUrl = 'api/skills/';

  onLike(card: any) {
    // TODO: incrementar o like, salvar via rest
    this.loadingService.openLoading()
    const body = {
      ...card,
      likes: card.likes + 1
    };

    this.httpClient.put(this.apiUrl + card.id, body).subscribe((res: any) => {
      /* Adicionei o loading completo na tela devido ao tempo de resposta da requisição */
      this.loadingService.closeLoading()
    }, error => {
      console.error('Erro ao incrementar likes:', error);
    });

    this.httpClient.get('api/skills').subscribe((res: any) => {
      this.card = res.find((item: any) => item.id == card.id)
    })
  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(card.link)}`);
  }
}
