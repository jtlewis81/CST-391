import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSermonComponent } from './create-sermon/create-sermon.component';
import { DeleteSermonComponent } from './delete-sermon/delete-sermon.component';
import { DisplaySermonComponent } from './display-sermon/display-sermon.component';
import { EditSermonComponent } from './edit-sermon/edit-sermon.component';
import { ListSermonsComponent } from './list-sermons/list-sermons.component';

const routes: Routes = [
  { path: 'create', component: CreateSermonComponent },
  { path: 'list-sermons', component: ListSermonsComponent },
  { path: 'display/:id', component: DisplaySermonComponent },
  { path: 'edit/:id', component: EditSermonComponent },
  { path: 'delete/:id', component: DeleteSermonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
