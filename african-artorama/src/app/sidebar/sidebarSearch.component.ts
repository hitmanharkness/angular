import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, ViewContainerRef
  , ComponentRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { CostSearchComponent } from './specific/costSearch.component';
import { SearchDirective } from './search.directive';
import { ColorSearchComponent } from './specific/colorSearch.component';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebarSearch.component.html'
})
export class SidebarSearchComponent implements OnInit, OnDestroy {
  @ViewChild(SearchDirective) searchHost: SearchDirective;
  @Input() type;
  //@Output() search = new EventEmitter();
  container: ViewContainerRef;
  private componentRef: ComponentRef<{}>;
  isExpanded = false;
  instance: SearchComponentBase;
  private mappings = {
    'cost': CostSearchComponent,
    'color': ColorSearchComponent
  };

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  getComponentType(typeName: string) {
    const foundType = this.mappings[typeName];

    if (!foundType) { throw new Error('Search Component Not Found'); }

    return foundType;
  }

  ngOnInit() {
    if (this.type) {
      const componentType = this.getComponentType(this.type);
      // note: componentType must be declared within module.entryComponents
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
      this.componentRef = this.searchHost.viewContainerRef.createComponent(factory);

      // set component context
      this.instance = <SearchComponentBase> this.componentRef.instance;
      //this.instance.search.subscribe(thing => this.search.emit(thing));
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }
}

export abstract class SearchComponentBase {
  title: string;
  //search: EventEmitter<any>;
  hasValue: boolean;
  abstract clear();
}

