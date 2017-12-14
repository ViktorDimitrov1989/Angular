import { CommentService } from './comment/comment.service';
import { AuthService } from './auth/auth.service';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';
import { AdvertService } from './advert/advert.service';

export const allServices = [ AuthService, ProductService, UserService, CommentService, AdvertService ];