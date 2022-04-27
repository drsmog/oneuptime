import { Column, Entity, Index } from 'typeorm';
import BaseModel from './BaseModel';
import User from './User';
import Project from './Project';
@Entity({
    name: "UserAlerts"
})
export default class Model extends BaseModel{
 
 @Column()
    name!: string;
 
 @Column()
    description!: string;
 
 @Column()
    errorTrackerId!: {
 
 @Column()
        type!: Schema.Types.ObjectId;
 
 @Column()
        ref!: 'ErrorTracker';
 
 @Column()
        alias!: 'errorTracker';
 
 @Column()
        index!: true;
    }; //Which error tracker this issue belongs to.
 
 @Column()
    type!: {
 
 @Column()
        type!: string;
 
 @Column()
        enum!: ['exception', 'message', 'error'];
 
 @Column()
        required!: true;
    };
 
 @Column()
    fingerprint!: [
        {
 
 @Column()
            type!: string;
        };
    ];
 
 @Column()
    fingerprintHash!: string;
    



 
 @Column()
    deletedByUser!: User;
 
 @Column()
    resolved!: boolean;

 
 @Column()
    resolvedAt!: {
 
 @Column()
        type!: Date;
    };

 
 @Column()
    resolvedById!: User;
 
 @Column()
    ignored!: boolean;

 
 @Column()
    ignoredAt!: {
 
 @Column()
        type!: Date;
    };

 
 @Column()
    ignoredById!: User;
}
schema.virtual('errorTracker'; {
 
 @Column()
    localField!: '_id';
 
 @Column()
    foreignField!: 'errorTrackerId';
 
 @Column()
    ref!: 'ErrorTracker';
 
 @Column()
    justOne!: true;
}








