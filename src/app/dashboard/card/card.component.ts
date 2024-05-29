import { LoadingService } from './../../services/loading.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() card: any;
  isLoading: boolean = false;
  constructor(private httpClient: HttpClient,
    private loadingService: LoadingService
  ) { }
  private apiUrl = 'api/skills/';

  ngOnInit() {
  }

  onLike(card: any) {
    // TODO: incrementar o like, salvar via rest

    this.loadingService.openLoading()
    const body = {
      ...card,
      likes: card.likes + 1
    };

    // Envia a solicitação PUT para a API em memória
    this.httpClient.put(this.apiUrl + card.id, body).subscribe((res: any) => {
      console.log('Likes incrementados com sucesso:', res);
      this.loadingService.closeLoading()

    }, error => {
      console.error('Erro ao incrementar likes:', error);
    });

    this.httpClient.get('api/skills').subscribe((res: any) => {
      console.log('res', res)
      this.card = res.find((item: any) => item.id == card.id)
    })
  }

  onShare(card: any) {
    // TODO: abrir o link do seu linkedin
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(card.link)}`);
  }

}
