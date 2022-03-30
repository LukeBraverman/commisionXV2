import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ChatBoxService} from "../service/chatBox.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthServicev3} from "../../AuthV3/service/AuthServiceV3.service";
import {switchMap} from "rxjs/operators";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-chat-v3',
  templateUrl: './chat-v3.component.html',
  styleUrls: ['./chat-v3.component.css']
})
export class ChatV3Component implements OnInit, AfterViewInit {
  //todo try a emmitter
  routeId: string;
  @ViewChildren("commentDiv") commentDivs: QueryList<ElementRef>;
  private routeSub: Subscription;

  constructor(public chatterboxService: ChatBoxService,
    private currentRoute: ActivatedRoute,
              public authServiceV3: AuthServicev3,
              private router: Router,

  ) { }

  ngOnInit(): void {
    // this.routeId = this.currentRoute.snapshot.paramMap.get('id');
    this.chatterboxService.toDisplay = [];
    this.routeSub = this.currentRoute.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id'])//log the value of id
      this.routeId = params['id'];
    });
    console.log(this.routeId);


    if (this.routeId) {
      this.chatterboxService.commissionId = this.routeId;

    }
    this.chatterboxService.loadMessages();

  }



  ngAfterViewInit() {
    this.commentDivs.changes.subscribe(() => {
      if (this.commentDivs && this.commentDivs.last) {
        this.commentDivs.last.nativeElement.focus();
      }
    });
  }


  onReturnFromChat() {
    this.router.navigate(['dashboard/ManageCommissions/active' ]);

  }
}
