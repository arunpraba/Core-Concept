import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from '../shared/custom-pipes/file-size.pipe';

@Component({
  selector: 'app-check-pipes',
  templateUrl: './check-pipes.component.html',
  styleUrls: ['./check-pipes.component.scss'],
  providers: [FileSizePipe]
})
export class CheckPipesComponent implements OnInit {
  folders: any = [];
  mapped: any = [];
  constructor(private fileSize: FileSizePipe) {}

  ngOnInit() {
    this.folders = [
      { name: 'Drive C', size: 213213432, description: 'System Files' },
      { name: 'Drive D', size: 12451565, description: 'Official' },
      { name: 'Drive C', size: 15559765, description: 'Personal' }
    ];

    this.mapped = this.folders.map(file => {
      return {
        name: file.name,
        size: this.fileSize.transform(file.size, 'MB'),
        description: file.description
      };
    });
  }
}
