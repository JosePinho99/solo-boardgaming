import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  isOpen: Boolean = false;
  currentValueConverted: string = '';
  allSelected = false;
  @Input() currentValues: any[] = [];
  @Input() values: any[] = [];
  @Input() icon: string = '';
  @Input() iconColor: string = '';
  @Input() selectable = false;

  @Output() selectionChanged = new EventEmitter<any[]>();

  @HostListener('document:click', ['$event'])
    outsideClick(event: MouseEvent) {
      if (!this.eRef.nativeElement.contains(event.target)) {
        this.isOpen = false;
      }
    }

  
  constructor(private eRef: ElementRef) { }

  ngOnInit(): void {
    this.convertValue();
    this.checkAllSelected();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectValue(value: any) {
    if (!this.selectable) {
      this.currentValues = [value];
      this.isOpen = false;
    } else {
      if (this.currentValues.includes(value)) {
        const index = this.currentValues.indexOf(value);
        this.currentValues.splice(index, 1); 
      } else {
        this.currentValues.push(value);
      }
    }
    this.convertValue();
    this.checkAllSelected();
    this.selectionChanged.emit(this.currentValues);
  }

  selectAll() {
    if (this.currentValues.length < this.values.length) {
      this.currentValues = [];
      for (let value of this.values) {
        this.currentValues.push(value);
      }
    } else {
      this.currentValues = [];
    }
    this.convertValue();
    this.checkAllSelected();
  }

  convertValue() {
    this.currentValueConverted = '';
    if (!this.selectable) {
      this.currentValueConverted = this.currentValues[0];
    } else {
      for (let i = 0; i < this.currentValues.length; i++) {
        this.currentValueConverted += this.currentValues[i];
        if (i < this.currentValues.length - 1) {
          this.currentValueConverted += ',';
        }
      }

      if (this.currentValues.length === 0) {
        this.currentValueConverted = '';
      }
      if (this.currentValues.length > 5) {
        this.currentValueConverted = this.currentValues.length + ' items selected';
      }
    }
  }

  checkAllSelected() {
    if (this.currentValues.length === this.values.length) {
      this.allSelected = true;
    } else {
      this.allSelected = false;
    }
  }
}
