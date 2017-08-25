import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service'

@Component({
    //selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    imageWidth: number = 50;
    imageMargin: number = 2;
    filteredProduct: IProduct[];
    showImage: boolean = false;
    products: IProduct[] = [];
    pageTitle: string = 'Product List';
    _listFilter: string;
    errorMessage: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProduct = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    constructor(private _productService: ProductService) {

        this._listFilter = '';
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProduct = this.products;
            },
            error => this.errorMessage = <any>error);

    }

    performFilter(filterBy: string): IProduct[] {
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List:' + message;

    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}