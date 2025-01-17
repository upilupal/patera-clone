import { ProductController } from '@/controllers/product.controller';
import { SampleController } from '@/controllers/sample.controller';
import { Router } from 'express';

export class ProductRouter {
  private router: Router;
  private productController: ProductController;

  constructor() {
    this.productController = new ProductController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/', this.productController.customProductController);
  }

  getRouter(): Router {
    return this.router;
  }
}
