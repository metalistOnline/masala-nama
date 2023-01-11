package com.yash.masalanama.controller;

import java.util.ArrayList;
import java.util.List;

// import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

//import com.NEOSWebView.entity.HPDIncidentTable;
//import com.NEOSWebView.entity.NCRCustomerName;
//import com.NEOSWebView.entity.NCRNeosConfigRules;
//import com.NEOSWebView.service.NEOSWebViewService;

@Controller
public class HomeController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

//	@Autowired
//	NEOSWebViewService neosWebViewService;
	
	@RequestMapping("/")
	public ModelAndView home() {
		logger.info("In home method of HomeController.");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("home");
		logger.info("Out from home method of HomeController.");
		return modelAndView;
	}
	
	@RequestMapping("/about")
	public ModelAndView about() {
		logger.info("In about method of HomeController.");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("about");
		logger.info("Out from about method of HomeController.");
		return modelAndView;
	}
	
	@RequestMapping("/service")
	public ModelAndView service() {
		logger.info("In service method of HomeController.");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("service");
		logger.info("Out from service method of HomeController.");
		return modelAndView;
	}
	
	@RequestMapping("/menu")
	public ModelAndView menu() {
		logger.info("In menu method of HomeController.");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("menu");
		logger.info("Out from menu method of HomeController.");
		return modelAndView;
	}
	
	@RequestMapping("/contact")
	public ModelAndView contact() {
		logger.info("In contact method of HomeController.");
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("contact");
		logger.info("Out from contact method of HomeController.");
		return modelAndView;
	}
	
	
	
	
	

	/*@RequestMapping("/")
	public ModelAndView home(HttpSession session) {
		logger.info("In home method of HomeController.");
		List<NCRNeosConfigRules> lstNCRNeosConfigRules = neosWebViewService.getVendorList();
		List<NCRCustomerName> lstNCRCustomerName = neosWebViewService.getCustomerList();
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("lstNCRNeosConfigRules", lstNCRNeosConfigRules);
		modelAndView.addObject("lstNCRCustomerName", lstNCRCustomerName);
		modelAndView.setViewName("landingPage");
		return modelAndView;
	}*/

/*	@RequestMapping("/getIncidentDetails")
	public ModelAndView getIncidentDetails(@RequestParam("fromDate") String fromDate, @RequestParam("toDate") String toDate,
			@RequestParam("radioValue") String radioValue, @RequestParam("vendorName") String vendorName, 
			@RequestParam("customerName") String customerName, @RequestParam("gasperTicketNumber") String gasperTicketNumber, HttpSession session) {
		logger.info("In getIncidentDetails method of HomeController, fromDate: " + fromDate+", toDate: "+toDate+", radioValue: "+radioValue);
		ModelAndView modelAndView = new ModelAndView();
		try {
			System.out.println("fromDate: " + fromDate + ", toDate: " + toDate + ", radioValue: " + radioValue
					+ ", vendorName: " + vendorName + ", customerName: " + customerName + " , gasperTicketNumber: "
					+ gasperTicketNumber);
			// String fromDate = "", toDate = "", transactionType = "";
			String transactionType = radioValue;
			List<HPDIncidentTable> lstHPDIncidentTable = neosWebViewService.getIncidentsList(fromDate, toDate, transactionType, vendorName, customerName, gasperTicketNumber);
			
			modelAndView.addObject("lstIncidentDetails", lstHPDIncidentTable);
			modelAndView.setViewName("incidentList");
			return modelAndView;
		} catch (Exception ex) {
			logger.error("Exception in getIncidentDetails1 method of HomeController: " + ex.getMessage());
			return modelAndView;
		}
	}*/
	
	/*@RequestMapping("/getIncidentDetails")
	@GetMapping(produces=MediaType.APPLICATION_JSON_VALUE)
	public Model getIncidentDetails(@RequestParam("fromDate") String fromDate, @RequestParam("toDate") String toDate,
			@RequestParam("radioValue") String radioValue, @RequestParam("vendorName") String vendorName, 
			@RequestParam("customerName") String customerName, @RequestParam("gasperTicketNumber") String gasperTicketNumber, HttpSession session, Model model) {
		logger.info("In getIncidentDetails method of HomeController, fromDate: " + fromDate+", toDate: "+toDate+", radioValue: "+radioValue);
		ModelAndView modelAndView = new ModelAndView();
		try {
			System.out.println("fromDate: " + fromDate + ", toDate: " + toDate + ", radioValue: " + radioValue
					+ ", vendorName: " + vendorName + ", customerName: " + customerName + " , gasperTicketNumber: "
					+ gasperTicketNumber);
			// String fromDate = "", toDate = "", transactionType = "";
			String transactionType = radioValue;
			List<HPDIncidentTable> lstHPDIncidentTable = neosWebViewService.getIncidentsList(fromDate, toDate, transactionType, vendorName, customerName, gasperTicketNumber);
			model.addAttribute("lstHPDIncidentTable", lstHPDIncidentTable);
			return model;
		} catch (Exception ex) {
			logger.error("Exception in getIncidentDetails method of HomeController: " + ex.getMessage());
			return model;
		}
	}*/
	
	/*@RequestMapping("/exportToExcel")
	public ModelAndView exportToExcel(@RequestParam("valueeee") String valueeee, HttpSession session) {
		logger.info("In exportToExcel method of HomeController, valueeee: " + valueeee);
		List<HPDIncidentTable> lstHPDIncidentTable = new ArrayList<HPDIncidentTable>();
		
		String hodIncidentTable[] = valueeee.split(",");
		//List<HPDIncidentTable> al = new ArrayList<HPDIncidentTable>();
		// al = Arrays.asList(str);
		for(String s: hodIncidentTable){
		   System.out.println(hodIncidentTable);
		   HPDIncidentTable hpdIncidentTable = new HPDIncidentTable();
		   hpdIncidentTable = (HPDIncidentTable) s;
		   lstHPDIncidentTable.add(hpdIncidentTable);
		}
		
				
		
		 List<HPDIncidentTable>
		 logger.info("In exportToExcel method of HomeController, fromDate: " + fromDate+", toDate: "+toDate+", radioValue: "+radioValue);
		ModelAndView modelAndView = new ModelAndView();
		try {
			System.out.println("fromDate: " + fromDate + ", toDate: " + toDate + ", radioValue: " + radioValue
					+ ", vendorName: " + vendorName + ", customerName: " + customerName + " , gasperTicketNumber: "
					+ gasperTicketNumber);
			// String fromDate = "", toDate = "", transactionType = "";
			String transactionType = radioValue;
			List<HPDIncidentTable> lstHPDIncidentTable = neosWebViewService.getIncidentsList(fromDate, toDate, transactionType, vendorName, customerName, gasperTicketNumber);
			
			modelAndView.addObject("valueeee", lstHPDIncidentTable);
			modelAndView.setViewName("incidentList");
			return modelAndView;
		} catch (Exception ex) {
			logger.error("Exception in exportToExcel method of HomeController: " + ex.getMessage());
			return modelAndView;
		}
		System.out.println("valueeee: "+valueeee);
		return null;
	}*/

}
