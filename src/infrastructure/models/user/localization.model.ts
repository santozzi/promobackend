import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
@Entity('localizations')
class LocalizationModel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    country: string;

    @Column()
    state:string;

    @Column()
    city: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

    constructor(country: string, state: string, city: string, id: number = 0, createdAt: Date = new Date(), updatedAt: Date = new Date()) {
        this.id = id;
        this.country = country;
        this.state = state;
        this.city = city;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;

    }
}

export default LocalizationModel;