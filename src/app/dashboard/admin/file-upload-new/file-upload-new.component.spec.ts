import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadNewComponent } from './file-upload-new.component';

describe('FileUploadNewComponent', () => {
  let component: FileUploadNewComponent;
  let fixture: ComponentFixture<FileUploadNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadNewComponent]
    });
    fixture = TestBed.createComponent(FileUploadNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
