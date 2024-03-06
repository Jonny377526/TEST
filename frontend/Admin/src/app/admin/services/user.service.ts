import { Injectable } from '@angular/core';
import {User, Role} from '../models/Roles';
import { TokenStorageService } from 'src/app/core/service/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private tokenStorageService: TokenStorageService) {}

  getCurrentUser(): User {
    const user = this.tokenStorageService.getUser();
    return {
      id: user.id,
      name: user.name,
      role: user.role as Role, 
    };
  }
}