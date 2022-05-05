package com.example.datacenter.controller;
import java.util.Date;
import java.util.List;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.example.datacenter.model.domain.Calciumpurchase;
import com.example.datacenter.model.domain.Productionprocess;
import com.example.datacenter.model.domain.request.CalciumpurchaseRequest;
import com.example.datacenter.model.domain.request.ProductionprocessRequest;
import com.example.datacenter.service.CalciumpurchaseService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author Hongsen
 * @create 2022-04-15 22:19
 */
@RestController
@RequestMapping("/calciumpurchase")
public class CalciumpurchaseController {

    @Resource
    private CalciumpurchaseService calciumpurchaseService;

    @PostMapping("/add")
    public String addCalciumpurchase(@RequestBody CalciumpurchaseRequest calciumpurchaseRequest) {
        Calciumpurchase calciumpurchase = new Calciumpurchase();
        calciumpurchase.setCalciumOrderID(calciumpurchaseRequest.getCalciumOrderID());
        calciumpurchase.setSupplierName(calciumpurchaseRequest.getSupplierName());
        calciumpurchase.setCaClName(calciumpurchaseRequest.getCaClName());
        calciumpurchase.setCaClBatchCode(calciumpurchaseRequest.getCaClBatchCode());
        calciumpurchase.setCaClBestBefore(calciumpurchaseRequest.getCaClBestBefore());
        calciumpurchase.setCaClOpenDate(calciumpurchaseRequest.getCaClOpenDate());
        calciumpurchase.setQuantity(calciumpurchaseRequest.getQuantity());
        calciumpurchase.setCreateTime(new Date());
        calciumpurchase.setUpdateTime(new Date());
        calciumpurchase.setIsDelete(0);

        boolean save = calciumpurchaseService.save(calciumpurchase);
        if (!save) {
            return "null,";
        }
        return calciumpurchase.getCalciumOrderID();
    }

    @PostMapping("/update")
    public String updateCaliumpurchase(@RequestBody CalciumpurchaseRequest calciumpurchaseRequest) {

        String orderID = calciumpurchaseRequest.getCalciumOrderID();
        if (orderID==null){
            return "null";
        }
        Calciumpurchase calciumpurchase = calciumpurchaseService.getById(orderID);

        calciumpurchase.setCalciumOrderID(calciumpurchaseRequest.getCalciumOrderID());
        calciumpurchase.setSupplierName(calciumpurchaseRequest.getSupplierName());
        calciumpurchase.setCaClName(calciumpurchaseRequest.getCaClName());
        calciumpurchase.setCaClBatchCode(calciumpurchaseRequest.getCaClBatchCode());
        calciumpurchase.setCaClBestBefore(calciumpurchaseRequest.getCaClBestBefore());
        calciumpurchase.setCaClOpenDate(calciumpurchaseRequest.getCaClOpenDate());
        calciumpurchase.setQuantity(calciumpurchaseRequest.getQuantity());
        calciumpurchase.setUpdateTime(new Date());
        calciumpurchase.setIsDelete(0);

        calciumpurchaseService.saveOrUpdate(calciumpurchase);
        return calciumpurchase.getCalciumOrderID();
    }

    @GetMapping("/search")
    public List<Calciumpurchase> searchCalciumpurchase(String id, HttpServletRequest request) {
        QueryWrapper<Calciumpurchase> queryWrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(id)) {
            queryWrapper.like("CalciumOrderID", id);
        }
        return calciumpurchaseService.list(queryWrapper);
    }

    @PostMapping("/delete")
    public void deleteCalciumpurchase(@RequestBody CalciumpurchaseRequest request) {
        Calciumpurchase calciumpurchase = new Calciumpurchase();
        calciumpurchase.setCalciumOrderID(request.getCalciumOrderID());
        calciumpurchaseService.removeById(calciumpurchase);
    }


}
