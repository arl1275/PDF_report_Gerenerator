import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

//process
import { get_name } from './Format';

const doc = new jsPDF()

doc.save(get_name()+".pdf")