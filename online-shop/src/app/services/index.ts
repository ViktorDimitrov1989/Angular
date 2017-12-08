import { CommentService } from './comment/comment.service';
import { AuthService } from './auth/auth.service';
import { ProductService } from './product/product.service';
import { UserService } from './user/user.service';

export const allServices = [ AuthService, ProductService, UserService, CommentService ];